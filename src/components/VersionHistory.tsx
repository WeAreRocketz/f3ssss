import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { History, RotateCcw, Save, Trash2 } from 'lucide-react';
import { useContent } from '@/hooks/useContent';
import { useToast } from '@/hooks/use-toast';

const VersionHistory = () => {
  const { saveVersion, getVersions, restoreVersion } = useContent();
  const { toast } = useToast();
  const [versionLabel, setVersionLabel] = useState('');
  const [versions, setVersions] = useState(getVersions());

  const handleSaveVersion = () => {
    const label = versionLabel.trim() || `Versão ${new Date().toLocaleString('pt-BR')}`;
    saveVersion(label);
    setVersions(getVersions());
    setVersionLabel('');
    toast({
      title: 'Versão salva!',
      description: `"${label}" foi salva com sucesso.`,
    });
  };

  const handleRestoreVersion = (timestamp: number, label: string) => {
    if (confirm(`Deseja restaurar a versão "${label}"? As alterações não salvas serão perdidas.`)) {
      restoreVersion(timestamp);
      toast({
        title: 'Versão restaurada!',
        description: `A versão "${label}" foi restaurada. Recarregue a página para ver as mudanças.`,
      });
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  const handleDeleteVersion = (timestamp: number) => {
    const updatedVersions = versions.filter(v => v.timestamp !== timestamp);
    localStorage.setItem('f3s-versions', JSON.stringify(updatedVersions));
    setVersions(updatedVersions);
    toast({
      title: 'Versão excluída',
      description: 'A versão foi removida do histórico.',
    });
  };

  return (
    <div className="space-y-6 bg-card rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-6 h-6 text-accent" />
        <h2 className="text-2xl font-heading font-bold">Histórico de Versões</h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>💡 Como funciona:</strong> Salve versões do conteúdo atual para criar pontos de restauração. 
          Você pode voltar para qualquer versão salva a qualquer momento. 
          Mantemos as últimas 10 versões automaticamente.
        </p>
      </div>

      {/* Save new version */}
      <div className="space-y-3 border-b pb-6">
        <h3 className="font-semibold text-lg">Salvar Versão Atual</h3>
        <div className="space-y-2">
          <Label htmlFor="version-label">Nome da Versão (opcional)</Label>
          <div className="flex gap-2">
            <Input
              id="version-label"
              placeholder="Ex: Antes da atualização de março"
              value={versionLabel}
              onChange={(e) => setVersionLabel(e.target.value)}
            />
            <Button onClick={handleSaveVersion} className="bg-accent hover:bg-accent/90">
              <Save className="w-4 h-4 mr-2" />
              Salvar
            </Button>
          </div>
        </div>
      </div>

      {/* Version list */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Versões Salvas ({versions.length}/10)</h3>
        
        {versions.length === 0 ? (
          <p className="text-muted-foreground text-sm py-8 text-center">
            Nenhuma versão salva ainda. Salve uma versão acima para começar.
          </p>
        ) : (
          <div className="space-y-2">
            {versions.sort((a, b) => b.timestamp - a.timestamp).map((version) => (
              <div
                key={version.timestamp}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <div>
                  <p className="font-medium">{version.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(version.timestamp).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRestoreVersion(version.timestamp, version.label)}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Restaurar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteVersion(version.timestamp)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VersionHistory;
