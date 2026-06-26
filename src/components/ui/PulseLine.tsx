"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PulseLineProps {
  className?: string;
  animate?: boolean;
  /** Rendered CSS height in px. The internal coordinate system is always 100 units
   *  tall so the waveform never clips regardless of this value. */
  height?: number;
}

// ─── Fixed internal coordinate system ────────────────────────────────────────
// ViewBox: 1440 × 100. Baseline at y=68.
// All wave landmarks are absolute — they do NOT scale with rendered height.
//
// Real Lead-II ECG anatomy (left to right):
//   TP segment (flat) → P wave (small rounded hump) → PR segment (flat) →
//   QRS complex (Q dip · R spike · S dip) → ST segment (flat) →
//   T wave (broad rounded hump) → TP segment (flat)
//
// Y landmarks (0 = top, 100 = bottom, baseline = 68):
//   P crest  : 56  (+12 above baseline)
//   Q trough : 73  ( −5 below baseline)
//   R peak   :  8  (+60 above baseline — leaves 8px safety margin at top)
//   S trough : 79  (−11 below baseline — shallow, not a canyon)
//   T crest  : 46  (+22 above baseline — noticeably shorter than R)

const W = 1440;
const BL = 68; // baseline y

// Each segment as an SVG path fragment
const ECG_PATH = [
  // ── Long flat lead-in ──────────────────────────────────────────────────────
  `M 0 ${BL}`,
  `L 380 ${BL}`,

  // ── P wave: gentle symmetric rounded hump ──────────────────────────────────
  `C 395 ${BL} 410 56 430 56`,   // rise to P crest
  `C 450 56 465 ${BL} 480 ${BL}`, // fall from P crest

  // ── PR segment ─────────────────────────────────────────────────────────────
  `L 528 ${BL}`,

  // ── QRS complex ────────────────────────────────────────────────────────────
  // Q: tiny brief dip — not always present but adds clinical realism
  `L 542 73`,
  // R: sharp narrow spike — rise is nearly vertical
  `L 558 8`,
  // Downstroke through baseline to S trough
  `L 576 79`,
  // S: short return back to baseline
  `L 600 ${BL}`,

  // ── ST segment: flat at baseline ───────────────────────────────────────────
  `L 634 ${BL}`,

  // ── T wave: broad, rounded, lower amplitude than R ────────────────────────
  `C 658 ${BL} 685 46 722 46`,    // rise to T crest
  `C 759 46 792 ${BL} 820 ${BL}`, // fall from T crest

  // ── Long flat tail ─────────────────────────────────────────────────────────
  `L ${W} ${BL}`,
].join(" ");

export default function PulseLine({
  className,
  animate = false,
  height = 80,
}: PulseLineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animate || !pathRef.current) return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.classList.add("animate-pulse-draw");
  }, [animate]);

  return (
    <div
      className={cn("w-full", className)}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        // Fixed internal viewBox — never clips regardless of rendered height
        viewBox={`0 0 ${W} 100`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path
          ref={pathRef}
          d={ECG_PATH}
          stroke="var(--red-bright)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          // non-scaling-stroke keeps stroke width constant regardless of SVG scaling
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
