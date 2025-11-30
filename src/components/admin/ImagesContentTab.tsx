import ImageUploader from '@/components/ImageUploader';
import { useContent } from '@/hooks/useContent';

const ImagesContentTab = () => {
  const { content, updateContent } = useContent();

  return (
    <div className="space-y-6 bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-heading font-bold mb-4">Gerenciar Imagens</h2>
      
      <div className="space-y-6">
        <ImageUploader
          label="Logo F3S"
          contentKey="image.logo"
          currentImage={content['image.logo']}
          onImageChange={updateContent}
        />
        
        <div className="border-t pt-6">
          <ImageUploader
            label="Foto do Ariston Ferraz"
            contentKey="image.ariston"
            currentImage={content['image.ariston']}
            onImageChange={updateContent}
          />
        </div>
        
        <div className="border-t pt-6">
          <ImageUploader
            label="Foto do Gilvane Soares"
            contentKey="image.gilvane"
            currentImage={content['image.gilvane']}
            onImageChange={updateContent}
          />
        </div>
        
        <div className="border-t pt-6">
          <ImageUploader
            label="Foto do Davi Azevedo (Especialista)"
            contentKey="image.davi"
            currentImage={content['image.davi']}
            onImageChange={updateContent}
          />
        </div>
        
        <div className="border-t pt-6">
          <ImageUploader
            label="Foto do Escritório"
            contentKey="image.office"
            currentImage={content['image.office']}
            onImageChange={updateContent}
          />
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>⚠️ Importante:</strong> As imagens são convertidas para Base64 e armazenadas no navegador. 
          Imagens muito grandes podem impactam o desempenho. Recomendamos usar imagens otimizadas (máx 5MB cada).
        </p>
      </div>
    </div>
  );
};

export default ImagesContentTab;