"use client";

import { useState } from "react";
import { COMMITMENT_TERMS } from "@/lib/commitmentTerms";

interface TermSelectorProps {
  onChange?: (months: number) => void;
}

export default function TermSelector({ onChange }: TermSelectorProps) {
  const [selected, setSelected] = useState(1);

  const handleSelect = (months: number) => {
    setSelected(months);
    onChange?.(months);
  };

  const active = COMMITMENT_TERMS.find((t) => t.months === selected) ?? COMMITMENT_TERMS[0];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {COMMITMENT_TERMS.map((term) => {
          const isSelected = term.months === selected;
          return (
            <button
              key={term.months}
              type="button"
              onClick={() => handleSelect(term.months)}
              className="text-left px-4 py-3 rounded-lg border transition-all"
              style={{
                background: isSelected ? "var(--red)" : "var(--surface)",
                borderColor: isSelected ? "var(--red)" : "var(--line)",
              }}
            >
              <div
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isSelected ? "var(--ink)" : "var(--bone)",
                }}
              >
                {term.label}
                {term.discountLabel && (
                  <span style={{ color: isSelected ? "var(--ink)" : "var(--red)" }}>
                    {" "}
                    — Save {term.discountLabel}%
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
        {active.microcopy}. Longer terms save more. Price shown at checkout
        reflects your selected term.
      </p>
    </div>
  );
}
