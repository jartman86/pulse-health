// CONFIG[stripe_keys] — set STRIPE_SECRET_KEY + NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in env
// CONFIG[checkout_owner] — Pulse(Stripe) vs MyDose for lab/membership payment

const SECRET_KEY = process.env.STRIPE_SECRET_KEY;

function isDev() {
  return process.env.NODE_ENV === "development" || !SECRET_KEY;
}

export interface CheckoutItem {
  name: string;
  priceInCents: number;
  quantity: number;
  metadata?: Record<string, string>;
}

export async function createLabCheckoutSession(
  item: CheckoutItem,
  successUrl: string,
  cancelUrl: string
): Promise<{ sessionId: string; url: string }> {
  if (isDev()) {
    return {
      sessionId: `mock_cs_${Date.now()}`,
      url: `${successUrl}?session_id=mock&demo=true`,
    };
  }

  const stripe = await import("stripe").then((m) => new m.default(SECRET_KEY!));
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: item.priceInCents,
          product_data: { name: item.name, metadata: item.metadata ?? {} },
        },
        quantity: item.quantity,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return { sessionId: session.id, url: session.url! };
}
