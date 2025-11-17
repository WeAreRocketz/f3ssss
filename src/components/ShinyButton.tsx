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
    ? 'px-6 md:px-10 py-4 md:py-5 text-base md:text-lg'
    : 'px-5 md:px-8 py-3 md:py-4 text-sm md:text-base';

  if (variant === 'outline') {
    return (
      <button
        className={cn(
          "relative overflow-hidden rounded-full font-semibold transition-all duration-300",
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
          "hover:shadow-lg hover:-translate-y-0.5",
          sizeClasses,
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  return (
    <button
      className={cn(
        "shiny-button relative overflow-hidden rounded-full font-semibold",
        "transition-all duration-300 hover:-translate-y-0.5",
        sizeClasses,
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ShinyButton;
