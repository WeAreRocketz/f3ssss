import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useContent } from '@/hooks/useContent';
import f3sLogo from '@/assets/f3s-logo.png';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('f3s-admin') === 'true';
  });
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { content, updateContent, resetContent } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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

  const handleSave = (key: string, value: string) => {
    updateContent(key, value);
    toast({
      title: 'Conteúdo atualizado!',
      description: 'As alterações foram salvas com sucesso.',
    });
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja resetar todo o conteúdo para o padrão?')) {
      resetContent();
      toast({
        title: 'Conteúdo resetado!',
        description: 'Todo o conteúdo foi restaurado para o padrão.',
      });
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

  const ContentEditor = ({ contentKey, label, multiline = false }: { contentKey: string; label: string; multiline?: boolean }) => {
    const [value, setValue] = useState(content[contentKey] || '');
    
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
          onClick={() => handleSave(contentKey, value)}
          className="bg-accent hover:bg-accent/90"
        >
          Salvar
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={f3sLogo} alt="F3S Logo" className="h-10" />
              <h1 className="text-2xl font-heading font-bold">Painel Administrativo</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/')}>
                Ver Site
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Resetar Conteúdo
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-8 gap-2">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="pain">Pain</TabsTrigger>
            <TabsTrigger value="differential">Diferenciais</TabsTrigger>
            <TabsTrigger value="founders">Fundadores</TabsTrigger>
            <TabsTrigger value="program">Programa</TabsTrigger>
            <TabsTrigger value="location">Localização</TabsTrigger>
            <TabsTrigger value="contact">Contato</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Hero</h2>
            <ContentEditor contentKey="hero.headline" label="Título Principal" />
            <ContentEditor contentKey="hero.subheadline" label="Subtítulo" />
            <ContentEditor contentKey="hero.description" label="Descrição" multiline />
          </TabsContent>

          <TabsContent value="pain" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Pain</h2>
            <ContentEditor contentKey="pain.headline" label="Título" />
            <ContentEditor contentKey="pain.subheadline" label="Subtítulo" />
            <ContentEditor contentKey="pain.text1" label="Texto 1" multiline />
            <ContentEditor contentKey="pain.text2" label="Texto 2" multiline />
            <ContentEditor contentKey="pain.mission" label="Missão F3S" />
          </TabsContent>

          <TabsContent value="differential" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Diferenciais</h2>
            <ContentEditor contentKey="differential.headline" label="Título" />
            <ContentEditor contentKey="differential.subheadline" label="Subtítulo" />
          </TabsContent>

          <TabsContent value="founders" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Fundadores</h2>
            <ContentEditor contentKey="founders.headline" label="Título da Seção" />
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-3">Ariston Ferraz</h3>
              <ContentEditor contentKey="founders.ariston.name" label="Nome" />
              <ContentEditor contentKey="founders.ariston.role" label="Cargo" />
              <ContentEditor contentKey="founders.ariston.description" label="Descrição" multiline />
              <ContentEditor contentKey="founders.ariston.quote" label="Citação" multiline />
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-3">Gilvane Soares</h3>
              <ContentEditor contentKey="founders.gilvane.name" label="Nome" />
              <ContentEditor contentKey="founders.gilvane.role" label="Cargo" />
              <ContentEditor contentKey="founders.gilvane.description" label="Descrição" multiline />
              <ContentEditor contentKey="founders.gilvane.quote" label="Citação" multiline />
            </div>

            <div className="border-t pt-4 mt-4">
              <ContentEditor contentKey="founders.banner" label="Banner F3S" multiline />
            </div>
          </TabsContent>

          <TabsContent value="program" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Programa</h2>
            <ContentEditor contentKey="program.headline" label="Título" />
            <ContentEditor contentKey="program.subheadline" label="Subtítulo" />
          </TabsContent>

          <TabsContent value="location" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Localização</h2>
            <ContentEditor contentKey="location.headline" label="Título" />
            <ContentEditor contentKey="location.subheadline" label="Subtítulo" />
            <ContentEditor contentKey="location.city" label="Cidade" />
            <ContentEditor contentKey="location.subtitle" label="Subtítulo da Localização" />
          </TabsContent>

          <TabsContent value="contact" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Seção Contato</h2>
            <ContentEditor contentKey="contact.headline" label="Título" />
            <ContentEditor contentKey="contact.subheadline" label="Subtítulo" />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 bg-card rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-bold mb-4">Configurações Gerais</h2>
            
            <div className="border-b pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Contatos</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>⚠️ Nota sobre envio de emails:</strong> O formulário atualmente redireciona para WhatsApp. 
                  Para receber emails do formulário, você precisará configurar um serviço de backend (Resend, SendGrid, etc) 
                  ou integrar com um serviço como Formspree ou Netlify Forms após fazer deploy na Hostinger.
                </p>
              </div>
              <div className="space-y-4">
                <ContentEditor 
                  contentKey="settings.email" 
                  label="Email para receber formulário (Requer configuração de backend)" 
                />
                <ContentEditor 
                  contentKey="settings.whatsapp" 
                  label="WhatsApp de contato (com código do país, ex: 5547999999999)" 
                />
                <ContentEditor 
                  contentKey="settings.footerEmail" 
                  label="Email do rodapé" 
                />
                <ContentEditor 
                  contentKey="settings.footerWhatsapp" 
                  label="WhatsApp do rodapé (com código do país)" 
                />
              </div>
            </div>

            <div className="border-b pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Pixels e Tracking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cole o código completo do script fornecido por cada plataforma. 
                Inclua as tags &lt;script&gt; no código.
              </p>
              <div className="space-y-4">
                <ContentEditor 
                  contentKey="settings.facebookPixel" 
                  label="Facebook Pixel (código completo com <script>)" 
                  multiline
                />
                <ContentEditor 
                  contentKey="settings.tiktokPixel" 
                  label="TikTok Pixel (código completo com <script>)" 
                  multiline
                />
                <ContentEditor 
                  contentKey="settings.googleAds" 
                  label="Google Ads (código completo com <script>)" 
                  multiline
                />
                <ContentEditor 
                  contentKey="settings.googleAnalytics" 
                  label="Google Analytics (código completo com <script>)" 
                  multiline
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Scripts Personalizados</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Adicione qualquer outro código de tracking ou scripts personalizados aqui.
              </p>
              <ContentEditor 
                contentKey="settings.customScripts" 
                label="Scripts Personalizados" 
                multiline
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
