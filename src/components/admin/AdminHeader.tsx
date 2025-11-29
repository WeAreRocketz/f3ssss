import { LogOut, Save, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContent } from '@/hooks/useContent';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import f3sLogo from '@/assets/f3s-logo.png';

interface AdminHeaderProps {
  handleReset: () => void;
  handleLogout: () => void;
  setActiveTab: (tab: string) => void;
}

const AdminHeader = ({ handleReset, handleLogout, setActiveTab }: AdminHeaderProps) => {
  const navigate = useNavigate();
  const { saveVersion } = useContent();
  const { toast } = useToast();

  const handleSaveVersion = () => {
    saveVersion(`Salvamento manual - ${new Date().toLocaleString('pt-BR')}`);
    toast({
      title: 'Versão salva!',
      description: 'O estado atual do conteúdo foi salvo no histórico.',
    });
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img src={f3sLogo} alt="F3S Logo" className="h-10" />
            <h1 className="text-2xl font-heading font-bold">Painel Administrativo</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              Ver Site
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Resetar ao Padrão
            </Button>
            <Button 
              variant="outline"
              onClick={handleSaveVersion}
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar Versão
            </Button>
            {/* Histórico button placed between Save Version and Logout */}
            <Button 
              variant="outline"
              onClick={() => setActiveTab('versions')}
            >
              <History className="w-4 h-4 mr-2" />
              Histórico
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;