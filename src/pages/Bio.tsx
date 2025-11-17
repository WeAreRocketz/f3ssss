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
      
      {/* Animated background light effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slower" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        {content['bio.logo'] && (
          <img 
            src={content['bio.logo']} 
            alt="Logo" 
            className="w-48 h-auto object-contain"
          />
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
