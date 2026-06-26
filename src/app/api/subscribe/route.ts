import { NextRequest, NextResponse } from "next/server";
import { pushLead } from "@/lib/integrations/ghl";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const email = data.get("email") as string;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await pushLead({
      firstName: "",
      lastName: "",
      email,
      door: "optimize",
      identity: "civilian",
      utmSource: req.headers.get("referer") || undefined,
    });

    const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    return NextResponse.redirect(`${base}/field-notes?subscribed=true`, { status: 303 });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
  }
}
