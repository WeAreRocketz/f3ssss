import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useContent } from '@/hooks/useContent';
import VersionHistory from '@/components/VersionHistory';
import f3sLogo from '@/assets/f3s-logo.png';

// Modularized components
import AdminHeader from '@/components/admin/AdminHeader';
import EcosystemContentTab from '@/components/admin/EcosystemContentTab';
import AcademyContentTab from '@/components/admin/AcademyContentTab';
import BioContentTab from '@/components/admin/BioContentTab';
import ImagesContentTab from '@/components/admin/ImagesContentTab';
import SettingsContentTab from '@/components/admin/SettingsContentTab';
import LeadsContentTab from '@/components/admin/LeadsContentTab'; // Import new tab

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('f3s-admin') === 'true';
  });
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { resetContent, saveVersion } = useContent();
  const [activeTab, setActiveTab] = useState('ecosystem');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: Hardcoded credentials for demonstration/local content management
    if (credentials.username === 'admin' && credentials.password === 'rocket@f3s') {
      sessionStorage.setItem('f3s-admin', 'true');
      setIsLoggedIn(true);
      toast({
        title: 'Login realizado com sucesso!',
        description: 'Bem-vindo ao painel administrativo.',
      });
    } else {
      toast({
        title: 'Erro ao fazer login',
        description: 'Usuário ou senha incorretos.',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('f3s-admin');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja resetar todo o conteúdo para o padrão? Esta ação não pode ser desfeita.')) {
      // Save current version before resetting
      saveVersion(`Backup antes do reset - ${new Date().toLocaleString('pt-BR')}`);
      
      resetContent();
      toast({
        title: 'Conteúdo resetado!',
        description: 'Todo o conteúdo foi restaurado para o padrão. Uma cópia de backup foi salva no histórico.',
      });
      
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src={f3sLogo} alt="F3S Logo" className="h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-heading font-bold mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">Faça login para gerenciar o conteúdo do site</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                <Lock className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <AdminHeader 
        handleReset={handleReset} 
        handleLogout={handleLogout} 
        setActiveTab={setActiveTab}
      />

      <main className="container-custom py-8">
        <Tabs defaultValue="ecosystem" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2">
            <TabsTrigger value="ecosystem">Home (Ecossistema)</TabsTrigger>
            <TabsTrigger value="team-program">Academy</TabsTrigger>
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
            <TabsTrigger value="versions">Histórico</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ecosystem">
            <EcosystemContentTab />
          </TabsContent>

          <TabsContent value="team-program">
            <AcademyContentTab />
          </TabsContent>
          
          <TabsContent value="bio">
            <BioContentTab />
          </TabsContent>

          <TabsContent value="leads">
            <LeadsContentTab />
          </TabsContent>

          <TabsContent value="images">
            <ImagesContentTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsContentTab />
          </TabsContent>

          <TabsContent value="versions">
            <VersionHistory />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;