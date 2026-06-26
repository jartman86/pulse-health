import { NextRequest, NextResponse } from "next/server";
import { createLabCheckoutSession } from "@/lib/integrations/stripe";
import { SIPHOX_PANELS, type PanelId } from "@/lib/integrations/siphox";
import { events } from "@/lib/integrations/ghl";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const panel = data.get("panel") as PanelId;
    const email = data.get("email") as string;

    const panelDef = SIPHOX_PANELS[panel];
    if (!panelDef) {
      return NextResponse.json({ error: "Invalid panel" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const { url } = await createLabCheckoutSession(
      {
        name: panelDef.name,
        priceInCents: panelDef.price * 100,
        quantity: 1,
        metadata: { panel, email },
      },
      `${baseUrl}/bloodwork/order/success?panel=${panel}`,
      `${baseUrl}/bloodwork/order?panel=${panel}`
    );

    // Fire validation event
    const door = (data.get("door") as string) || "unknown";
    await events.labPurchased(panel, door, email).catch(() => {});

    return NextResponse.redirect(url, { status: 303 });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
