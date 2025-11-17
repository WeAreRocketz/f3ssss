const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Growth chart bars - animated */}
      <div className="absolute bottom-0 left-[10%] md:left-[15%] w-16 md:w-20 h-40 md:h-56 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-1 rounded-t-lg shadow-xl shadow-accent/10" />
      <div className="absolute bottom-0 left-[28%] md:left-[33%] w-16 md:w-20 h-48 md:h-64 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-2 rounded-t-lg shadow-xl shadow-accent/10" />
      <div className="absolute bottom-0 left-[46%] md:left-[51%] w-16 md:w-20 h-56 md:h-72 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-3 rounded-t-lg shadow-xl shadow-accent/10" />
      
      {/* Growth arrow path */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 12px hsl(var(--accent) / 0.2))' }}
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 100 500 Q 300 400, 500 300 T 900 150"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          fill="none"
          opacity="0.3"
          strokeDasharray="15 8"
          className="animate-dash-flow"
        />
        {/* Arrow head */}
        <polygon
          points="890,145 905,150 890,155"
          fill="hsl(var(--accent))"
          opacity="0.3"
          className="animate-arrow-pulse"
        />
      </svg>
      
      {/* Floating subtle orbs */}
      <div className="absolute top-[20%] right-[10%] w-40 md:w-64 h-40 md:h-64 bg-accent/8 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-[25%] left-[65%] w-48 md:w-72 h-48 md:h-72 bg-accent/8 rounded-full blur-3xl animate-float-slower" />
      
      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
