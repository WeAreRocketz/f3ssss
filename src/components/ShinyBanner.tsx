import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyBannerProps {
  children: ReactNode;
  className?: string;
}

const ShinyBanner = ({ children, className }: ShinyBannerProps) => {
  return (
    <div className="overflow-hidden rounded-2xl w-full">
      <div
        className={cn(
          "shiny-banner relative rounded-2xl font-semibold w-full",
          "transition-all duration-300",
          className
        )}
      >
        <div className="relative z-10 px-8 py-8 md:px-12 md:py-10">{children}</div>
      </div>
    </div>
  );
};

export default ShinyBanner;
