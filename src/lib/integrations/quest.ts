// CONFIG[quest_partner_api] — set QUEST_API_KEY + QUEST_API_URL in env
const BASE_URL = process.env.QUEST_API_URL;
const API_KEY = process.env.QUEST_API_KEY;

function isDev() {
  return process.env.NODE_ENV === "development" || !BASE_URL || !API_KEY;
}

export interface QuestOrderPayload {
  patientEmail: string;
  patientFirstName: string;
  patientLastName: string;
  panelCode: string;
  preferredLocation?: { zip: string };
}

export async function createQuestOrder(payload: QuestOrderPayload): Promise<{
  orderId: string;
  labLocatorUrl: string;
  requisitionUrl: string;
}> {
  if (isDev()) {
    return {
      orderId: `mock_quest_${Date.now()}`,
      labLocatorUrl: "https://questdiagnostics.com/find-a-location?demo=true",
      requisitionUrl: "https://quest.demo/req/mock.pdf",
    };
  }

  const res = await fetch(`${BASE_URL}/v1/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Quest order failed: ${res.status}`);
  return res.json();
}
