import { useEffect, useRef, useState } from "react";

interface ExpertiseBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const ExpertiseBar = ({ skill, level, delay = 0 }: ExpertiseBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm uppercase tracking-wide">
          {skill}
        </span>
        <span className="text-accent font-bold text-sm gold-shine">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-1000 ease-out gold-shine"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: '0.2s'
          }}
        />
      </div>
    </div>
  );
};

export default ExpertiseBar;
