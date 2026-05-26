import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream hover:bg-terracotta-light focus-visible:ring-terracotta",
  secondary:
    "bg-olive text-cream hover:bg-olive-light focus-visible:ring-olive",
  outline:
    "border-2 border-cream/70 text-cream hover:border-cream hover:bg-cream/10 focus-visible:ring-cream",
};

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };

type LinkProps = BaseProps & {
  to: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    const { to, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
