import { Stethoscope, Users } from "lucide-react";

const roles = [
  {
    icon: Stethoscope,
    title: "Medical Director",
    body: "Sets clinical protocols and prescribing standards for every treatment on the platform — a licensed, board-certified physician.",
  },
  {
    icon: Users,
    title: "Clinical Network",
    body: "Licensed MDs and NPs in your state review your labs, evaluate your history, and manage your care directly.",
  },
];

export default function ProviderSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {roles.map((role) => (
        <div
          key={role.title}
          className="flex flex-col gap-3 p-6 rounded-lg border"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 44, height: 44, background: "var(--surface-2)", border: "1px solid var(--line)" }}
          >
            <role.icon size={20} style={{ color: "var(--red)" }} />
          </div>
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--bone)" }}
          >
            {role.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {role.body}
          </p>
        </div>
      ))}
    </div>
  );
}
