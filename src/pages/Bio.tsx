import { useContent } from '@/hooks/useContent';
import ShinyButton from '@/components/ShinyButton';
import TrackingScripts from '@/components/TrackingScripts';

const Bio = () => {
  const { content } = useContent();
  
  // Parse buttons from content
  const buttons = [];
  let i = 1;
  while (content[`bio.button${i}.text`]) {
    buttons.push({
      text: content[`bio.button${i}.text`],
      url: content[`bio.button${i}.url`],
    });
    i++;
  }

  return (
    <div className="min-h-screen bg-[#131313] relative overflow-hidden flex items-center justify-center p-6">
      <TrackingScripts />
      
      {/* Animated background light effect - STRONGER WITH PULSE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/40 rounded-full blur-3xl animate-pulse-glow-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-accent/35 rounded-full blur-3xl animate-pulse-glow-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/30 rounded-full blur-3xl animate-pulse-glow-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] right-[15%] w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl animate-pulse-glow-slower" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-accent/20 rounded-full blur-3xl animate-pulse-glow-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        {content['bio.logo'] ? (
          <img 
            src={content['bio.logo']} 
            alt="Logo" 
            className="w-48 h-auto object-contain"
          />
        ) : (
          <div className="w-48 h-24 flex items-center justify-center text-muted-foreground text-sm text-center">
            Configure a logo no Admin
          </div>
        )}

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4">
          {buttons.map((button, index) => (
            <a 
              key={index}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <ShinyButton 
                variant="gold" 
                className="w-full text-lg py-6"
              >
                {button.text}
              </ShinyButton>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
