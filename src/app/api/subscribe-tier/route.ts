import { NextRequest, NextResponse } from "next/server";
import { subscribeTier, events } from "@/lib/integrations/ghl";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const email = data.get("email") as string;
    const tierId = data.get("tierId") as "operator" | "full-spectrum";

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (tierId !== "operator" && tierId !== "full-spectrum") {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    await subscribeTier({ email, tierId });
    await events.coachingEnrolled(email).catch(() => {});

    const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    return NextResponse.redirect(`${base}/welcome?subscribed=${tierId}`, { status: 303 });
  } catch (err) {
    console.error("Tier subscribe error:", err);
    return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
  }
}
