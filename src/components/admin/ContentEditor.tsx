import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useContent } from '@/hooks/useContent';

interface ContentEditorProps {
  contentKey: string;
  label: string;
  multiline?: boolean;
}

const ContentEditor = ({ contentKey, label, multiline = false }: ContentEditorProps) => {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [value, setValue] = useState(content[contentKey] || '');
  
  const handleSave = () => {
    updateContent(contentKey, value);
    toast({
      title: 'Conteúdo atualizado!',
      description: 'As alterações foram salvas com sucesso.',
    });
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={contentKey}>{label}</Label>
      {multiline ? (
        <textarea
          id={contentKey}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full min-h-[100px] p-3 rounded-lg border border-border bg-background resize-y"
        />
      ) : (
        <Input
          id={contentKey}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <Button 
        size="sm" 
        onClick={handleSave}
        className="bg-accent hover:bg-accent/90"
      >
        Salvar
      </Button>
    </div>
  );
};

export default ContentEditor;