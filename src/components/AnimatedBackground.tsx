const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Growth chart bars - animated */}
      <div className="absolute bottom-0 left-[10%] md:left-[15%] w-16 md:w-20 h-40 md:h-56 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-1 rounded-t-lg shadow-xl shadow-accent/10" />
      <div className="absolute bottom-0 left-[28%] md:left-[33%] w-16 md:w-20 h-48 md:h-64 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-2 rounded-t-lg shadow-xl shadow-accent/10" />
      <div className="absolute bottom-0 left-[46%] md:left-[51%] w-16 md:w-20 h-56 md:h-72 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-3 rounded-t-lg shadow-xl shadow-accent/10" />
      <div className="absolute bottom-0 left-[64%] md:left-[69%] w-16 md:w-20 h-44 md:h-60 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-1 rounded-t-lg shadow-xl shadow-accent/10" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-[82%] md:left-[87%] w-16 md:w-20 h-52 md:h-68 bg-gradient-to-t from-accent/20 to-transparent animate-growth-bar-2 rounded-t-lg shadow-xl shadow-accent/10" style={{ animationDelay: '1.5s' }} />
      
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
