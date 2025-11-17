const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Growth chart bars - animated */}
      <div className="absolute bottom-0 left-[10%] md:left-[15%] w-12 md:w-16 h-32 md:h-48 bg-gradient-to-t from-accent/10 to-transparent animate-growth-bar-1 rounded-t-lg shadow-lg shadow-accent/5" />
      <div className="absolute bottom-0 left-[25%] md:left-[30%] w-12 md:w-16 h-40 md:h-56 bg-gradient-to-t from-accent/10 to-transparent animate-growth-bar-2 rounded-t-lg shadow-lg shadow-accent/5" />
      <div className="absolute bottom-0 left-[40%] md:left-[45%] w-12 md:w-16 h-48 md:h-64 bg-gradient-to-t from-accent/10 to-transparent animate-growth-bar-3 rounded-t-lg shadow-lg shadow-accent/5" />
      
      {/* Growth arrow path */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 8px hsl(var(--accent) / 0.1))' }}
      >
        <path
          d="M 50 80 Q 200 70, 350 50 T 650 20"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
          opacity="0.15"
          strokeDasharray="10 5"
          className="animate-dash-flow"
        />
        {/* Arrow head */}
        <polygon
          points="645,15 655,20 645,25"
          fill="hsl(var(--accent))"
          opacity="0.15"
          className="animate-arrow-pulse"
        />
      </svg>
      
      {/* Floating subtle orbs */}
      <div className="absolute top-[20%] right-[15%] w-32 md:w-48 h-32 md:h-48 bg-accent/5 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-[30%] left-[60%] w-40 md:w-56 h-40 md:h-56 bg-accent/5 rounded-full blur-2xl animate-float-slower" />
      
      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
