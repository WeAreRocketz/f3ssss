import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gold' | 'outline';
  size?: 'default' | 'lg';
}

const ShinyButton = ({ 
  children, 
  className, 
  variant = 'gold',
  size = 'default',
  ...props 
}: ShinyButtonProps) => {
  const sizeClasses = size === 'lg' 
    ? 'px-6 md:px-10 py-4 md:py-5 text-base md:text-lg h-14 md:h-16'
    : 'px-5 md:px-8 py-3 md:py-4 text-sm md:text-base h-12 md:h-14';

  if (variant === 'outline') {
    return (
      <button
        className={cn(
          "shiny-button-outline relative overflow-hidden rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2",
          "border-2 hover:-translate-y-0.5",
          sizeClasses,
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }

  return (
    <button
      className={cn(
        "shiny-button relative overflow-hidden rounded-full font-semibold inline-flex items-center justify-center gap-2",
        "transition-all duration-300 hover:-translate-y-0.5",
        sizeClasses,
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ShinyButton;
