import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogOut, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useContent } from '@/hooks/useContent';
import ImageUploader from '@/components/ImageUploader';
import VersionHistory from '@/components/VersionHistory';
import f3sLogo from '@/assets/f3s-logo.png';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('f3s-admin') === 'true';
  });
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { content, updateContent, resetContent, saveVersion } = useContent();

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
                Resetar ao Padrão
              </Button>
              <Button 
                variant="outline"
                onClick={() => saveVersion(`Salvamento manual - ${new Date().toLocaleString('pt-BR')}`)}
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Versão
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
        <Tabs defaultValue="homepage" className="space-y-6">
          <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2">
            <TabsTrigger value="homepage">Homepage</TabsTrigger>
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
            <TabsTrigger value="versions">Histórico</TabsTrigger>
          </TabsList>
          
          {/* Homepage Tab with nested tabs */}
          <TabsContent value="homepage">
            <Tabs defaultValue="hero" className="space-y-6">
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="pain">Pain</TabsTrigger>
                <TabsTrigger value="differential">Diferenciais</TabsTrigger>
                <TabsTrigger value="founders">Fundadores</TabsTrigger>
                <TabsTrigger value="program">Programa</TabsTrigger>
                <TabsTrigger value="location">Localização</TabsTrigger>
                <TabsTrigger value="contact">Contato</TabsTrigger>
              </TabsList>

              <TabsContent value="hero" className="space-y-6 bg-card rounded-2xl p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">Seção Hero</h2>
                <ContentEditor contentKey="hero.headline" label="Título Principal (Parte 1)" />
                <ContentEditor contentKey="hero.headline.gold" label="Título Principal (Parte Dourada)" />
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
                <ContentEditor contentKey="founders.headline" label="Título da Seção (Parte 1)" />
                <ContentEditor contentKey="founders.headline.gold" label="Título da Seção (Parte Dourada)" />
                <ContentEditor contentKey="founders.headline.suffix" label="Título da Seção (Parte Final)" />
                
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
                  <ContentEditor contentKey="founders.banner" label="Banner Final" multiline />
                </div>
              </TabsContent>

              <TabsContent value="program" className="space-y-6 bg-card rounded-2xl p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">Seção Programa</h2>
                <ContentEditor contentKey="program.headline" label="Título" />
                <ContentEditor contentKey="program.subheadline" label="Subtítulo" />
              </TabsContent>

              <TabsContent value="location" className="space-y-6 bg-card rounded-2xl p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">Seção Localização</h2>
                <ContentEditor contentKey="location.headline" label="Título (Parte 1)" />
                <ContentEditor contentKey="location.headline.gold" label="Título (Parte Dourada)" />
                <ContentEditor contentKey="location.subheadline" label="Subtítulo" />
                <ContentEditor contentKey="location.city" label="Cidade" />
                <ContentEditor contentKey="location.subtitle" label="Subtítulo da Localização" />
              </TabsContent>

              <TabsContent value="contact" className="space-y-6 bg-card rounded-2xl p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">Seção Contato</h2>
                <ContentEditor contentKey="contact.headline" label="Título" />
                <ContentEditor contentKey="contact.subheadline" label="Subtítulo" />
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          {/* Bio Tab */}
          <TabsContent value="bio" className="space-y-6 bg-card rounded-2xl p-6">
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
                {[1, 2, 3, 4, 5, 6].map((num) => {
                  const hasButton = content[`bio.button${num}.text`];
                  if (!hasButton && num > 3) return null;
                  
                  return (
                    <div key={num} className="space-y-4 p-4 border rounded-lg mb-4 relative">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Botão {num}</h4>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => {
                            if (confirm(`Tem certeza que deseja remover o Botão ${num}?`)) {
                              updateContent(`bio.button${num}.text`, '');
                              updateContent(`bio.button${num}.url`, '');
                              toast({
                                title: 'Botão removido!',
                                description: `O botão ${num} foi removido com sucesso.`,
                              });
                              setTimeout(() => window.location.reload(), 500);
                            }
                          }}
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
                  );
                })}
                
                <Button 
                  onClick={() => {
                    const nextNum = [4, 5, 6].find(num => !content[`bio.button${num}.text`]);
                    if (nextNum) {
                      updateContent(`bio.button${nextNum}.text`, `Link ${nextNum}`);
                      updateContent(`bio.button${nextNum}.url`, 'https://example.com');
                      toast({
                        title: 'Botão adicionado!',
                        description: `Novo botão ${nextNum} foi adicionado. Configure o texto e URL.`,
                      });
                      setTimeout(() => window.location.reload(), 500);
                    } else {
                      toast({
                        title: 'Limite atingido',
                        description: 'Você já tem o máximo de 6 botões.',
                        variant: 'destructive',
                      });
                    }
                  }}
                  className="w-full"
                >
                  Adicionar Novo Botão
                </Button>
              </div>
            </div>
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
              <h3 className="text-xl font-semibold mb-4">Integração Typeform</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Como usar:</strong> Cole o código embed completo do Typeform abaixo. 
                  Quando configurado, o formulário de contato padrão será substituído automaticamente pelo Typeform.
                  Para remover o Typeform e voltar ao formulário padrão, basta limpar o campo e salvar.
                </p>
              </div>
              <ContentEditor 
                contentKey="settings.typeform" 
                label="Código Embed do Typeform (HTML completo com <iframe> ou <div>)" 
                multiline
              />
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

          <TabsContent value="images" className="space-y-6 bg-card rounded-2xl p-6">
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
                Imagens muito grandes podem impactar o desempenho. Recomendamos usar imagens otimizadas (máx 5MB cada).
              </p>
            </div>
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
