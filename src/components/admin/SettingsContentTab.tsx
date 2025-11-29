import ContentEditor from './ContentEditor';

const SettingsContentTab = () => {
  return (
    <div className="space-y-6 bg-card rounded-2xl p-6">
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
    </div>
  );
};

export default SettingsContentTab;