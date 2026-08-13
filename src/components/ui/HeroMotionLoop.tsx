"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";

// ─── prefers-reduced-motion, via useSyncExternalStore ──────────────────────
// Subscribing to browser state through useSyncExternalStore (rather than
// useState+useEffect) avoids calling setState synchronously inside an effect
// body, and gets correct SSR/hydration behavior for free — React renders
// getServerSnapshot() on the server and during hydration, then re-renders
// with the real client value right after, with no flash of mismatched state.
function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

// ─── Heartbeat waveform ─────────────────────────────────────────────────────
// Procedural P-QRS-T shape (same clinical anatomy as PulseLine's static ECG
// path), but generated as a continuous function of phase `u` so it can be
// sampled at any resolution and scrolled indefinitely — PulseLine draws one
// fixed path once; this needs to run forever as a canvas background loop.
function gauss(u: number, center: number, width: number) {
  const d = u - center;
  return Math.exp(-(d * d) / (2 * width * width));
}
function ecgWave(uRaw: number): number {
  const u = ((uRaw % 1) + 1) % 1;
  const p = gauss(u, 0.34, 0.02) * 0.16; // P wave
  const q = -gauss(u, 0.455, 0.004) * 0.22; // Q dip
  const r = gauss(u, 0.47, 0.006) * 1.0; // R spike (dominant)
  const s = -gauss(u, 0.485, 0.006) * 0.32; // S dip
  const t = gauss(u, 0.66, 0.045) * 0.3; // T wave
  return p + q + r + s + t;
}

interface Trace {
  centerY: number; // fraction of canvas height
  amplitude: number; // fraction of canvas height
  cyclePx: number; // px per heartbeat
  speed: number; // px/sec, phase scroll speed
  color: string;
  lineAlpha: number;
  glow: number;
  pulseX: number; // fraction of width — fixed "sensor point" that flashes with the beat
}

const TRACES: Trace[] = [
  { centerY: 0.4, amplitude: 0.15, cyclePx: 300, speed: 34, color: "#C8313F", lineAlpha: 0.6, glow: 16, pulseX: 0.74 },
  { centerY: 0.62, amplitude: 0.09, cyclePx: 340, speed: 24, color: "#A22633", lineAlpha: 0.32, glow: 9, pulseX: 0.4 },
  { centerY: 0.22, amplitude: 0.06, cyclePx: 260, speed: 46, color: "#7E1E29", lineAlpha: 0.22, glow: 6, pulseX: 0.58 },
];

interface HeroMotionLoopProps {
  className?: string;
}

// Canvas hero accent: a live heartbeat/EKG sweep (ties directly to "Keep a
// Pulse on Your Health" and matches the PulseLine waveform used as section
// dividers). Falls back to the static A4 poster for prefers-reduced-motion.
export default function HeroMotionLoop({ className }: HeroMotionLoopProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationId = 0;
    let running = true;
    let lastTime = performance.now();
    let elapsed = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawTraces() {
      for (const trace of TRACES) {
        const centerY = trace.centerY * height;
        const amplitude = trace.amplitude * height;
        const phaseOffset = (elapsed * trace.speed) % trace.cyclePx;

        ctx!.beginPath();
        const step = 3;
        for (let x = 0; x <= width; x += step) {
          const u = (x + phaseOffset) / trace.cyclePx;
          const y = centerY - ecgWave(u) * amplitude;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = trace.color;
        ctx!.globalAlpha = trace.lineAlpha;
        ctx!.lineWidth = 1.75;
        ctx!.lineJoin = "round";
        ctx!.shadowColor = trace.color;
        ctx!.shadowBlur = trace.glow;
        ctx!.stroke();
        ctx!.shadowBlur = 0;

        // Fixed "sensor point" that flashes brighter as the beat passes it
        const sensorX = trace.pulseX * width;
        const sensorU = (sensorX + phaseOffset) / trace.cyclePx;
        const magnitude = Math.abs(ecgWave(sensorU));
        const sensorY = centerY - ecgWave(sensorU) * amplitude;
        const dotSize = 2 + magnitude * 5.5;

        ctx!.beginPath();
        ctx!.arc(sensorX, sensorY, dotSize, 0, Math.PI * 2);
        ctx!.fillStyle = trace.color;
        ctx!.globalAlpha = Math.min(0.25 + magnitude * 0.9, 1);
        ctx!.shadowColor = trace.color;
        ctx!.shadowBlur = trace.glow * 1.8;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
      ctx!.globalAlpha = 1;
    }

    function draw(now: number) {
      if (!running) return;
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      ctx!.clearRect(0, 0, width, height);
      drawTraces();

      animationId = requestAnimationFrame(draw);
    }

    resize();
    animationId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <Image
        src="/images/hero/a4-hero-motion-poster.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className={className}
        style={{ objectFit: "cover", opacity: 0.25 }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
