import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: undefined;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--red)",
    color: "var(--ink)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
  },
  secondary: {
    background: "transparent",
    color: "#E8B6AE",
    border: "1px solid #5A3030",
  },
  ghost: {
    background: "transparent",
    color: "var(--bone-dim)",
  },
  danger: {
    background: "var(--state-flag)",
    color: "var(--bone)",
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded",
    "transition-all duration-150",
    "hover:brightness-110 active:scale-[0.98]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    sizeStyles[size],
    className
  );
  const style = variantStyles[variant];

  if ("href" in props && props.href !== undefined) {
    const { href } = props;
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled, ...rest } = props as ButtonAsButton;
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
      style={style}
      {...(rest["aria-label"] ? { "aria-label": rest["aria-label"] } : {})}
    >
      {children}
    </button>
  );
});

export default Button;
