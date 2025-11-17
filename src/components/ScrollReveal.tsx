import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = 'up' }: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-50px)';
      case 'right':
        return 'translateX(50px)';
      case 'down':
        return 'translateY(-30px)';
      case 'fade':
        return 'translateY(0)';
      case 'up':
      default:
        return 'translateY(30px)';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      elementRef.current.style.transform = getInitialTransform();
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
