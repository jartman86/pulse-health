"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/weight-loss", label: "Weight Loss" },
  { href: "/optimize", label: "Optimize" },
  { href: "/bloodwork", label: "Labs" },
  { href: "/treatments", label: "Treatments" },
  { href: "/membership", label: "Membership" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/field-notes", label: "Field Notes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isLightDoor = pathname.startsWith("/weight-loss");

  return (
    <>
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 border-b"
          : "py-5",
        isLightDoor && scrolled
          ? "bg-[#F4EFE7]/95 backdrop-blur border-[#B8AFA4]"
          : scrolled
          ? "bg-[#141110]/95 backdrop-blur border-[#2E2724]"
          : "bg-transparent border-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-none"
          aria-label="Pulse Health — home"
        >
          <Image
            src={isLightDoor ? "/logo/logo-white-new.png" : "/logo/logo-bone-text-darkbg.png"}
            alt="Pulse Health"
            width={638}
            height={668}
            className="h-[100px] w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm rounded transition-colors duration-150",
                "font-medium tracking-wide",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-amber-400"
                  : isLightDoor
                  ? "text-[#1A1614]/70 hover:text-[#1A1614]"
                  : "text-[#C9C0B5] hover:text-[#F1EBE2]"
              )}
              style={
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? { color: "var(--red)" }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/account"
            className="text-sm font-medium px-3 py-1.5 rounded transition-colors"
            style={{ color: "var(--muted)" }}
          >
            Sign In
          </Link>
          <Link
            href="/treatments"
            className="text-sm font-semibold px-4 py-2 rounded transition-all hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "var(--red)",
              color: "var(--ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            Find Your Protocol
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X
              size={22}
              style={{ color: isLightDoor ? "var(--ink)" : "var(--bone)" }}
            />
          ) : (
            <Menu
              size={22}
              style={{ color: isLightDoor ? "var(--ink)" : "var(--bone)" }}
            />
          )}
        </button>
      </nav>

      {/* Mobile drawer — CSS max-height transition for smooth open/close */}
      <div
        className={cn(
          "lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none border-transparent"
        )}
        style={{
          background: isLightDoor ? "#F4EFE7" : "var(--ink-2)",
          borderColor: open ? "var(--line)" : "transparent",
        }}
        aria-hidden={!open}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-3 text-sm font-medium rounded transition-colors border-b",
                "border-[var(--line)]"
              )}
              style={{
                color:
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "var(--red)"
                    : isLightDoor
                    ? "#1A1614"
                    : "var(--bone-dim)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Link
              href="/account"
              className="text-sm font-medium px-4 py-3 rounded text-center border transition-colors"
              style={{
                borderColor: isLightDoor ? "#B8AFA4" : "var(--line)",
                color: isLightDoor ? "#1A1614" : "var(--bone-dim)",
              }}
            >
              Sign In
            </Link>
            <Link
              href="/treatments"
              className="text-sm font-semibold px-4 py-3 rounded text-center transition-all hover:brightness-110"
              style={{
                background: "var(--red)",
                color: "var(--ink)",
                fontFamily: "var(--font-display)",
              }}
            >
              Find Your Protocol
            </Link>
          </div>
        </div>
      </div>
    </header>

    {/* Backdrop — closes drawer on tap outside */}
    <div
      className={cn(
        "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden="true"
      onClick={() => setOpen(false)}
      style={{ background: "rgba(0,0,0,0.45)" }}
    />
    </>
  );
}
