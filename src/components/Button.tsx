import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-primary text-white hover:bg-blue-600 shadow-md hover:shadow-primary/25",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        outline: "border border-secondary text-foreground hover:bg-secondary/50",
    };

    return (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}
