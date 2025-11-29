import { useContent } from '@/hooks/useContent';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import ImageUploader from '@/components/ImageUploader';
import ContentEditor from './ContentEditor';

const BioContentTab = () => {
  const { content, updateContent } = useContent();
  const { toast } = useToast();

  const handleAddButton = () => {
    const nextNum = [1, 2, 3, 4, 5, 6].find(num => !content[`bio.button${num}.text`]);
    if (nextNum) {
      updateContent(`bio.button${nextNum}.text`, `Link ${nextNum}`);
      updateContent(`bio.button${nextNum}.url`, 'https://example.com');
      toast({
        title: 'Botão adicionado!',
        description: `Novo botão ${nextNum} foi adicionado. Configure o texto e URL.`,
      });
      // Force reload to update the content state and re-render the list correctly
      setTimeout(() => window.location.reload(), 500);
    } else {
      toast({
        title: 'Limite atingido',
        description: 'Você já tem o máximo de 6 botões.',
        variant: 'destructive',
      });
    }
  };

  const handleRemoveButton = (num: number) => {
    if (confirm(`Tem certeza que deseja remover o Botão ${num}?`)) {
      updateContent(`bio.button${num}.text`, '');
      updateContent(`bio.button${num}.url`, '');
      toast({
        title: 'Botão removido!',
        description: `O botão ${num} foi removido com sucesso.`,
      });
      // Force reload to update the content state and re-render the list correctly
      setTimeout(() => window.location.reload(), 500);
    }
  };

  // Determine which buttons exist to render them
  const existingButtons = [1, 2, 3, 4, 5, 6].filter(num => content[`bio.button${num}.text`]);
  const nextButtonAvailable = existingButtons.length < 6;

  return (
    <div className="space-y-6 bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-heading font-bold mb-4">Página Bio</h2>
      
      <div className="space-y-6">
        <ImageUploader
          label="Logo da Bio"
          contentKey="bio.logo"
          currentImage={content['bio.logo']}
          onImageChange={updateContent}
        />
        
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Botões</h3>
          {existingButtons.map((num) => (
            <div key={num} className="space-y-4 p-4 border rounded-lg mb-4 relative">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Botão {num}</h4>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => handleRemoveButton(num)}
                >
                  Remover
                </Button>
              </div>
              <ContentEditor 
                contentKey={`bio.button${num}.text`} 
                label="Texto do Botão" 
              />
              <ContentEditor 
                contentKey={`bio.button${num}.url`} 
                label="URL do Botão" 
              />
            </div>
          ))}
          
          {nextButtonAvailable && (
            <Button 
              onClick={handleAddButton}
              className="w-full"
            >
              Adicionar Novo Botão
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BioContentTab;