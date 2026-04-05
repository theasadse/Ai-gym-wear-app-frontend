"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  href?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#3fe7c4] to-[#8af6ff] text-slate-900 shadow-[0_12px_30px_rgba(49,224,186,0.35)] hover:translate-y-[-1px]",
  secondary:
    "border border-white/15 bg-white/5 text-foreground hover:border-white/30",
  ghost: "text-foreground hover:text-white/80",
};

function buildClassName(variant: Variant, fullWidth?: boolean, extra?: string) {
  return [
    baseStyles,
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const {
    href,
    variant = "primary",
    fullWidth,
    leadingIcon,
    trailingIcon,
    className,
    children,
    ...rest
  } = props;
  const classes = buildClassName(variant, fullWidth, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {leadingIcon}
        {children}
        {trailingIcon}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
