"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import TermSelector from "@/components/ui/TermSelector";

export default function ProtocolTermStep() {
  const [months, setMonths] = useState(1);

  return (
    <div className="mt-10">
      <Eyebrow>Choose Your Term</Eyebrow>
      <TermSelector onChange={setMonths} />
      <Link
        href={`/bloodwork?commitmentMonths=${months}`}
        className="mt-6 inline-flex items-center gap-2 text-base font-semibold px-7 py-3.5 rounded transition-all hover:brightness-110"
        style={{ background: "var(--red)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
      >
        Start Your Bloodwork <ArrowRight size={16} />
      </Link>
    </div>
  );
}
