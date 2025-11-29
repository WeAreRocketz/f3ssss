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
  // --- F3S TEAM Program Page (Old Index) ---
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
  
  // Founders Section (Detailed descriptions for Team Program page)
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
  
  // --- F3S Ecosystem Home Page (New Index) ---
  'ecosystem.hero.headline': 'Transformamos Pessoas, Processos e Estratégias em Crescimento Real.',
  'ecosystem.hero.subheadline': 'A F3S é o ecossistema que integra formação, tecnologia e implementação, criando empresas capazes de crescer com autonomia, clareza e previsibilidade.',
  'ecosystem.hero.bullet1': 'Treinamos sua equipe',
  'ecosystem.hero.bullet2': 'Organizamos sua operação',
  'ecosystem.hero.bullet3': 'Implementamos o seu funil de vendas',
  'ecosystem.hero.cta': 'Conheça nossas 3 soluções',

  'ecosystem.institutional.headline': 'O que é a F3S?',
  'ecosystem.institutional.text1': 'A F3S é um ecossistema de estratégia e performance criado para transformar a forma como empresas crescem.',
  'ecosystem.institutional.text2': 'Enquanto o mercado oferece cursos soltos, agências dependentes ou consultorias distantes, nós integramos tudo o que uma empresa moderna precisa:',
  'ecosystem.institutional.pillar1': 'Pessoas fortes',
  'ecosystem.institutional.pillar2': 'Sistemas claros',
  'ecosystem.institutional.pillar3': 'Processos replicáveis',
  'ecosystem.institutional.pillar4': 'Execução que gera vendas',
  'ecosystem.institutional.motto': 'Nós acreditamos que crescimento não é sorte — é método.',

  'ecosystem.solutions.headline': 'As 3 Soluções do Ecossistema F3S',

  'ecosystem.solution1.title': 'F3S EDUCATION — Formação Presencial de Equipes',
  'ecosystem.solution1.description': 'Treinamos pessoas para que sua empresa nunca mais dependa de terceiros.',
  'ecosystem.solution1.subdescription': 'Formamos equipes internas capazes de operar marketing, funil, tráfego, vendas, conteúdo, métricas e gestão.',
  'ecosystem.solution1.item1': 'F3S Team (até 3 pessoas)',
  'ecosystem.solution1.item2': 'F3S Team Pro (4 a 10 pessoas)',
  'ecosystem.solution1.item3': 'Formação para empresários (F3S Business Education)',
  'ecosystem.solution1.item4': 'Workshops e imersões',
  'ecosystem.solution1.item5': 'Certificação F3S (em breve)',
  'ecosystem.solution1.cta': 'Conheça a F3S Education',
  'ecosystem.solution1.url': '/team',

  'ecosystem.solution2.title': 'F3S TECH — Tecnologia que organiza e acelera sua operação',
  'ecosystem.solution2.description': 'Estruturamos tudo que sua empresa precisa para ter eficiência e previsibilidade.',
  'ecosystem.solution2.subdescription': 'Automação, CRM, dashboards, rotinas e a infraestrutura completa para operar com consistência.',
  'ecosystem.solution2.item1': 'CRM configurado e integrado',
  'ecosystem.solution2.item2': 'Automação Make',
  'ecosystem.solution2.item3': 'Dashboards e KPIs',
  'ecosystem.solution2.item4': 'Padrões técnicos de funil',
  'ecosystem.solution2.item5': 'Infraestrutura operacional',
  'ecosystem.solution2.item6': 'Sistema de dados e indicadores',
  'ecosystem.solution2.cta': 'Conheça a F3S Tech',
  'ecosystem.solution2.url': '#contact',

  'ecosystem.solution3.title': 'F3S PERFORMANCE — Implementação real e geração de resultado',
  'ecosystem.solution3.description': 'Aqui é onde sua estratégia vira vendas.',
  'ecosystem.solution3.subdescription': 'Executamos a arquitetura do seu funil, campanhas, comunicação, análises e todo o motor de crescimento.',
  'ecosystem.solution3.item1': 'Funil completo',
  'ecosystem.solution3.item2': 'Criativos e copy',
  'ecosystem.solution3.item3': 'Tráfego pago',
  'ecosystem.solution3.item4': 'Conteúdo',
  'ecosystem.solution3.item5': 'Otimizações semanais',
  'ecosystem.solution3.item6': 'Mapeamento e crescimento contínuo',
  'ecosystem.solution3.cta': 'Conheça a F3S Performance',
  'ecosystem.solution3.url': '#contact',

  'ecosystem.method.headline': 'O Método F3S (os 3 fundamentos)',
  'ecosystem.method.subheadline': 'O Crescimento Acontece Assim:',
  'ecosystem.method.step1.title': 'Clareza Estratégica',
  'ecosystem.method.step1.description': 'Direção, oferta, posicionamento e foco.',
  'ecosystem.method.step2.title': 'Estrutura Inteligente',
  'ecosystem.method.step2.description': 'Sistemas, tecnologia, processos e organização.',
  'ecosystem.method.step3.title': 'Ação Contínua',
  'ecosystem.method.step3.description': 'Execução, testes, acompanhamento e otimização.',
  'ecosystem.method.motto': 'Clareza cria direção. Estrutura cria velocidade. Ação cria resultado.',

  'ecosystem.why.headline': 'Por que escolher a F3S?',
  'ecosystem.why.item1': 'Treinamento presencial e prático',
  'ecosystem.why.item2': 'Método aplicado em empresas reais',
  'ecosystem.why.item3': 'Estrutura física premium',
  'ecosystem.why.item4': 'Especialistas com resultados comprovados',
  'ecosystem.why.item5': 'Entregas claras e acompanhamento real',
  'ecosystem.why.item6': 'Integração entre equipe + sistema + performance',

  'ecosystem.location.headline': 'O Ecossistema F3S por dentro',
  'ecosystem.location.item1': 'Escritório de 120m² em Itapema/SC',
  'ecosystem.location.item2': 'Salas de treinamento',
  'ecosystem.location.item3': 'Sala de estratégia',
  'ecosystem.location.item4': 'Ambiente premium',
  'ecosystem.location.item5': 'Estrutura de gravação',
  'ecosystem.location.item6': 'Tecnologia de ponta',
  
  'founders.ariston.summary': 'Especialista em vendas online. R$ 10 milhões faturados. Criador de métodos de escala e performance.',
  'founders.gilvane.summary': 'Especialista em branding e posicionamento. Mais de 6 milhoes em vendas no ecommerce.',
  'founders.quote.ecosystem': 'Criamos a F3S para formar equipes fortes, estratégias sólidas e sistemas que transformam empresas.',

  'ecosystem.cta.headline': 'Pronto para transformar sua empresa em uma máquina de crescimento?',
  'ecosystem.cta.subheadline': 'Clique abaixo para agendar um diagnóstico e conhecer a solução ideal para você.',
  'ecosystem.cta.button': 'AGENDAR DIAGNÓSTICO GRATUITO',
  
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