import type { IntakePayload } from "./types";

// CONFIG[mydose_api] — set MYDOSE_API_URL + MYDOSE_API_KEY in env
const BASE_URL = process.env.MYDOSE_API_URL;
const API_KEY = process.env.MYDOSE_API_KEY;

function headers() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
}

/* In dev, stub returns realistic mock data so the full UX is demoable */
function isDev() {
  return process.env.NODE_ENV === "development" || !BASE_URL || !API_KEY;
}

export async function createIntake(payload: IntakePayload): Promise<{ patientId: string; portalUrl: string }> {
  if (isDev()) {
    return {
      patientId: `mock_patient_${Date.now()}`,
      portalUrl: "https://my.pulsehealth.com/onboard?demo=true",
    };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/intake`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`MyDose intake failed: ${res.status}`);
  return res.json();
}

export async function getPatientStatus(patientId: string): Promise<{ status: string; nextStep: string }> {
  if (isDev()) {
    return { status: "active", nextStep: "bloodwork_ordered" };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/${patientId}/status`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error(`MyDose status failed: ${res.status}`);
  return res.json();
}

export async function bookConsult(patientId: string): Promise<{ consultId: string; schedulingUrl: string }> {
  if (isDev()) {
    return {
      consultId: `mock_consult_${Date.now()}`,
      schedulingUrl: "https://my.pulsehealth.com/schedule?demo=true",
    };
  }

  const res = await fetch(`${BASE_URL}/v1/patients/${patientId}/consult`, {
    method: "POST",
    headers: headers(),
  });
  if (!res.ok) throw new Error(`MyDose consult booking failed: ${res.status}`);
  return res.json();
}
