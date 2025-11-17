import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContentData {
  [key: string]: string;
}

interface ContentVersion {
  timestamp: number;
  data: ContentData;
  label: string;
}

interface ContentContextType {
  content: ContentData;
  updateContent: (key: string, value: string) => void;
  resetContent: () => void;
  saveVersion: (label: string) => void;
  getVersions: () => ContentVersion[];
  restoreVersion: (timestamp: number) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const defaultContent: ContentData = {
  // Hero Section
  'hero.headline': 'Cansado de pagar agências e',
  'hero.headline.gold': 'não ver resultado?',
  'hero.subheadline': 'Treine o seu próprio time e assuma o controle do seu marketing.',
  'hero.description': 'A F3S é a escola presencial que forma equipes de alta performance em marketing e vendas — ensinando estratégia, tráfego, funil e posicionamento aplicados à sua empresa.',
  
  // Pain Section
  'pain.headline': 'Você não precisa de mais uma agência.',
  'pain.subheadline': 'Precisa de um time que saiba o que faz.',
  'pain.text1': 'Você já percebeu que o problema não é o marketing — é a falta de pessoas preparadas.',
  'pain.text2': 'O resultado? Você paga caro e continua sem previsibilidade.',
  'pain.mission': 'A F3S nasceu pra mudar isso.',
  
  // Differential Section
  'differential.headline': 'O que torna a F3S única',
  'differential.subheadline': 'Não é um curso online. É uma formação presencial completa.',
  
  // Founders Section
  'founders.headline': 'Criada por quem viveu',
  'founders.headline.gold': 'o campo de batalha',
  'founders.headline.suffix': 'do digital',
  'founders.ariston.name': 'Ariston Ferraz',
  'founders.ariston.role': 'Estratégia e Vendas Online',
  'founders.ariston.description': 'Empresário e especialista em vendas digitais com mais de R$10 milhões faturados online, criador de ecossistemas de e-commerce. Domina as estratégias que comandam o mundo online e também técnicas de vendas presenciais usando a tecnologia ao favor do time comercial.',
  'founders.ariston.quote': 'Construí um ecossistema completo de vendas online do zero. Agora ensino times inteiros a fazer o mesmo.',
  'founders.gilvane.name': 'Gilvane Soares',
  'founders.gilvane.role': 'Branding e Posicionamento',
  'founders.gilvane.description': 'Especialista em identidade de marca, posicionamento estratégico e narrativa de negócio. Responsável por marcas com alto valor de mercado e percepção premium.',
  'founders.gilvane.quote': 'Uma marca forte não é sorte. É estratégia, posicionamento e execução consistente.',
  'founders.banner': 'A F3S nasceu da prática de quem construiu, testou, escalou empresas reais e agora ensina times a fazer o mesmo.',
  
  // Program Section
  'program.headline': 'O Programa F3S TEAM',
  'program.subheadline': '4 semanas. 100% presencial. 100% aplicado.',
  
  // Location Section
  'location.headline': 'Um ambiente feito para transformar',
  'location.headline.gold': 'mentes em resultados',
  'location.subheadline': 'Nossa sede em Itapema/SC é um espaço físico de aprendizado, estratégia e performance',
  'location.city': 'Itapema, Santa Catarina',
  'location.subtitle': '120m² de puro conhecimento',
  
  // Contact Section
  'contact.headline': 'Quer ter um time que entende, executa e escala o seu negócio?',
  'contact.subheadline': 'Agende um diagnóstico gratuito e descubra como aplicar o método F3S na sua empresa.',
  
  // Images (store URLs or base64)
  'image.logo': '',
  'image.ariston': '',
  'image.office': '',
  
  // Settings
  'settings.email': 'contato@f3s.com.br',
  'settings.whatsapp': '5547999999999',
  'settings.footerEmail': 'contato@f3s.com.br',
  'settings.footerWhatsapp': '5547999999999',
  'settings.facebookPixel': '',
  'settings.tiktokPixel': '',
  'settings.googleAds': '',
  'settings.googleAnalytics': '',
  'settings.customScripts': '',
  'settings.typeform': '', // Typeform embed code or URL
  
  // Bio Page
  'bio.logo': '',
  'bio.button1.text': 'Link Um',
  'bio.button1.url': 'https://example.com',
  'bio.button2.text': 'Link Dois',
  'bio.button2.url': 'https://example.com',
  'bio.button3.text': 'Link Três',
  'bio.button3.url': 'https://example.com',
};

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentData>(defaultContent);

  useEffect(() => {
    const stored = localStorage.getItem('f3s-content');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setContent({ ...defaultContent, ...parsed });
      } catch (e) {
        console.error('Error loading content:', e);
      }
    }
  }, []);

  const updateContent = (key: string, value: string) => {
    setContent(prev => {
      const newContent = { ...prev, [key]: value };
      localStorage.setItem('f3s-content', JSON.stringify(newContent));
      return newContent;
    });
  };

  const resetContent = () => {
    localStorage.removeItem('f3s-content');
    setContent(defaultContent);
  };

  const saveVersion = (label: string) => {
    const versions = getVersions();
    const newVersion: ContentVersion = {
      timestamp: Date.now(),
      data: { ...content },
      label: label || `Versão ${new Date().toLocaleString('pt-BR')}`
    };
    
    const updatedVersions = [...versions, newVersion];
    // Keep only last 10 versions
    if (updatedVersions.length > 10) {
      updatedVersions.shift();
    }
    
    localStorage.setItem('f3s-versions', JSON.stringify(updatedVersions));
  };

  const getVersions = (): ContentVersion[] => {
    const stored = localStorage.getItem('f3s-versions');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [];
      }
    }
    return [];
  };

  const restoreVersion = (timestamp: number) => {
    const versions = getVersions();
    const version = versions.find(v => v.timestamp === timestamp);
    if (version) {
      setContent(version.data);
      localStorage.setItem('f3s-content', JSON.stringify(version.data));
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, saveVersion, getVersions, restoreVersion }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};
