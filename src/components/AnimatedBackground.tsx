const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Growth chart bars - animated with up/down movement - MAIORES E MAIS VISÍVEIS */}
      <div className="absolute bottom-0 left-[5%] w-16 md:w-20 h-48 md:h-64 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-1 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[16%] w-16 md:w-20 h-56 md:h-72 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-2 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[27%] w-16 md:w-20 h-52 md:h-68 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-3 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[38%] w-16 md:w-20 h-64 md:h-80 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-1 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[49%] w-16 md:w-20 h-60 md:h-76 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-2 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[60%] w-16 md:w-20 h-56 md:h-72 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-3 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[71%] w-16 md:w-20 h-68 md:h-84 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-1 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[82%] w-16 md:w-20 h-52 md:h-68 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-2 rounded-t-lg shadow-xl" />
      <div className="absolute bottom-0 left-[93%] w-16 md:w-20 h-48 md:h-64 bg-gradient-to-t from-accent/40 to-accent/10 animate-bar-bounce-3 rounded-t-lg shadow-xl" />
    </div>
  );
};

export default AnimatedBackground;
