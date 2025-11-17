const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Growth chart bars - animated with up/down movement */}
      <div className="absolute bottom-0 left-[8%] w-12 md:w-16 h-32 md:h-40 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-1 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[20%] w-12 md:w-16 h-40 md:h-52 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-2 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[32%] w-12 md:w-16 h-36 md:h-48 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-3 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[44%] w-12 md:w-16 h-48 md:h-60 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-1 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[56%] w-12 md:w-16 h-44 md:h-56 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-2 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[68%] w-12 md:w-16 h-40 md:h-52 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-3 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[80%] w-12 md:w-16 h-52 md:h-64 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-1 rounded-t-lg shadow-lg" />
      <div className="absolute bottom-0 left-[92%] w-12 md:w-16 h-36 md:h-48 bg-gradient-to-t from-accent/30 to-accent/5 animate-bar-bounce-2 rounded-t-lg shadow-lg" />
    </div>
  );
};

export default AnimatedBackground;
