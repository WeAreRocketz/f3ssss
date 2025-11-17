const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Moving light beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-beam-1" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-beam-2" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-beam-3" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-orb-1" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-orb-2" />
      
      {/* Grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
