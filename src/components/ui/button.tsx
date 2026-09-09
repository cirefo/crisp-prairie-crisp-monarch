import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose",
  {
    variants: {
      variant: {
        primary: "bg-rose text-ivory hover:bg-rose-deep",
        gold: "bg-gold-deep text-ivory hover:bg-gold",
        outline:
          "bg-transparent text-ink shadow-[0_0_0_1px_rgba(42,34,30,0.16)] hover:bg-blush/50",
        ghost: "bg-transparent text-ink hover:bg-blush/40",
        inverse: "bg-ivory text-ink hover:bg-champagne",
      },
      size: {
        sm: "min-h-10 px-4 text-sm rounded-md",
        md: "min-h-11 px-5 text-sm rounded-lg",
        lg: "min-h-12 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
