import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentEditor from './ContentEditor';

const EcosystemContentTab = () => {
  return (
    <Tabs defaultValue="hero" className="space-y-6">
      <TabsList className="grid grid-cols-3 lg:grid-cols-5 gap-2">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="institutional">Institucional</TabsTrigger>
        <TabsTrigger value="solutions">Soluções</TabsTrigger>
        <TabsTrigger value="method">Método</TabsTrigger>
        <TabsTrigger value="why-choose">Por que F3S</TabsTrigger>
      </TabsList>

      <TabsContent value="hero" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Hero (Ecossistema)</h2>
        <ContentEditor contentKey="ecosystem.hero.headline" label="Título Principal" />
        <ContentEditor contentKey="ecosystem.hero.subheadline" label="Subtítulo" multiline />
        <ContentEditor contentKey="ecosystem.hero.bullet1" label="Bullet 1" />
        <ContentEditor contentKey="ecosystem.hero.bullet2" label="Bullet 2" />
        <ContentEditor contentKey="ecosystem.hero.bullet3" label="Bullet 3" />
        <ContentEditor contentKey="ecosystem.hero.cta" label="Texto do CTA" />
      </TabsContent>

      <TabsContent value="institutional" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Institucional</h2>
        <ContentEditor contentKey="ecosystem.institutional.headline" label="Título" />
        <ContentEditor contentKey="ecosystem.institutional.text1" label="Texto 1" multiline />
        <ContentEditor contentKey="ecosystem.institutional.text2" label="Texto 2" multiline />
        <ContentEditor contentKey="ecosystem.institutional.pillar1" label="Pilar 1" />
        <ContentEditor contentKey="ecosystem.institutional.pillar2" label="Pilar 2" />
        <ContentEditor contentKey="ecosystem.institutional.pillar3" label="Pilar 3" />
        <ContentEditor contentKey="ecosystem.institutional.pillar4" label="Pilar 4" />
        <ContentEditor contentKey="ecosystem.institutional.motto" label="Motto Final" />
      </TabsContent>

      <TabsContent value="solutions" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Soluções</h2>
        <ContentEditor contentKey="ecosystem.solutions.headline" label="Título da Seção" />
        
        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">Solução 1: F3S EDUCATION</h3>
          <ContentEditor contentKey="ecosystem.solution1.title" label="Título" />
          <ContentEditor contentKey="ecosystem.solution1.description" label="Descrição Curta" />
          <ContentEditor contentKey="ecosystem.solution1.subdescription" label="Sub-descrição" />
          <ContentEditor contentKey="ecosystem.solution1.item1" label="Item 1" />
          <ContentEditor contentKey="ecosystem.solution1.item2" label="Item 2" />
          <ContentEditor contentKey="ecosystem.solution1.item3" label="Item 3" />
          <ContentEditor contentKey="ecosystem.solution1.item4" label="Item 4" />
          <ContentEditor contentKey="ecosystem.solution1.item5" label="Item 5" />
          <ContentEditor contentKey="ecosystem.solution1.cta" label="Texto CTA" />
          <ContentEditor contentKey="ecosystem.solution1.url" label="URL CTA (Ex: /team)" />
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">Solução 2: F3S TECH</h3>
          <ContentEditor contentKey="ecosystem.solution2.title" label="Título" />
          <ContentEditor contentKey="ecosystem.solution2.description" label="Descrição Curta" />
          <ContentEditor contentKey="ecosystem.solution2.subdescription" label="Sub-descrição" />
          <ContentEditor contentKey="ecosystem.solution2.item1" label="Item 1" />
          <ContentEditor contentKey="ecosystem.solution2.item2" label="Item 2" />
          <ContentEditor contentKey="ecosystem.solution2.item3" label="Item 3" />
          <ContentEditor contentKey="ecosystem.solution2.item4" label="Item 4" />
          <ContentEditor contentKey="ecosystem.solution2.item5" label="Item 5" />
          <ContentEditor contentKey="ecosystem.solution2.item6" label="Item 6" />
          <ContentEditor contentKey="ecosystem.solution2.cta" label="Texto CTA" />
          <ContentEditor contentKey="ecosystem.solution2.url" label="URL CTA (Ex: #contact)" />
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">Solução 3: F3S PERFORMANCE</h3>
          <ContentEditor contentKey="ecosystem.solution3.title" label="Título" />
          <ContentEditor contentKey="ecosystem.solution3.description" label="Descrição Curta" />
          <ContentEditor contentKey="ecosystem.solution3.subdescription" label="Sub-descrição" />
          <ContentEditor contentKey="ecosystem.solution3.item1" label="Item 1" />
          <ContentEditor contentKey="ecosystem.solution3.item2" label="Item 2" />
          <ContentEditor contentKey="ecosystem.solution3.item3" label="Item 3" />
          <ContentEditor contentKey="ecosystem.solution3.item4" label="Item 4" />
          <ContentEditor contentKey="ecosystem.solution3.item5" label="Item 5" />
          <ContentEditor contentKey="ecosystem.solution3.item6" label="Item 6" />
          <ContentEditor contentKey="ecosystem.solution3.cta" label="Texto CTA" />
          <ContentEditor contentKey="ecosystem.solution3.url" label="URL CTA (Ex: #contact)" />
        </div>
      </TabsContent>

      <TabsContent value="method" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Método</h2>
        <ContentEditor contentKey="ecosystem.method.headline" label="Título" />
        <ContentEditor contentKey="ecosystem.method.subheadline" label="Subtítulo" />
        <ContentEditor contentKey="ecosystem.method.step1.title" label="Passo 1 Título" />
        <ContentEditor contentKey="ecosystem.method.step1.description" label="Passo 1 Descrição" />
        <ContentEditor contentKey="ecosystem.method.step2.title" label="Passo 2 Título" />
        <ContentEditor contentKey="ecosystem.method.step2.description" label="Passo 2 Descrição" />
        <ContentEditor contentKey="ecosystem.method.step3.title" label="Passo 3 Título" />
        <ContentEditor contentKey="ecosystem.method.step3.description" label="Passo 3 Descrição" />
        <ContentEditor contentKey="ecosystem.method.motto" label="Motto Final" multiline />
      </TabsContent>

      <TabsContent value="why-choose" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Por que F3S</h2>
        <ContentEditor contentKey="ecosystem.why.headline" label="Título" />
        <ContentEditor contentKey="ecosystem.why.item1" label="Item 1" />
        <ContentEditor contentKey="ecosystem.why.item2" label="Item 2" />
        <ContentEditor contentKey="ecosystem.why.item3" label="Item 3" />
        <ContentEditor contentKey="ecosystem.why.item4" label="Item 4" />
        <ContentEditor contentKey="ecosystem.why.item5" label="Item 5" />
        <ContentEditor contentKey="ecosystem.why.item6" label="Item 6" />
        
        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">Localização e Estrutura</h3>
          <ContentEditor contentKey="ecosystem.location.headline" label="Título da Estrutura" />
          <ContentEditor contentKey="ecosystem.location.item1" label="Item Estrutura 1" />
          <ContentEditor contentKey="ecosystem.location.item2" label="Item Estrutura 2" />
          <ContentEditor contentKey="ecosystem.location.item3" label="Item Estrutura 3" />
          <ContentEditor contentKey="ecosystem.location.item4" label="Item Estrutura 4" />
          <ContentEditor contentKey="ecosystem.location.item5" label="Item Estrutura 5" />
          <ContentEditor contentKey="ecosystem.location.item6" label="Item Estrutura 6" />
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">Fundadores (Resumo)</h3>
          <ContentEditor contentKey="founders.ariston.summary" label="Ariston Resumo" multiline />
          <ContentEditor contentKey="founders.gilvane.summary" label="Gilvane Resumo" multiline />
          <ContentEditor contentKey="founders.quote.ecosystem" label="Citação Final Fundadores" multiline />
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-3">CTA Final</h3>
          <ContentEditor contentKey="ecosystem.cta.headline" label="Título CTA Final" />
          <ContentEditor contentKey="ecosystem.cta.subheadline" label="Subtítulo CTA Final" />
          <ContentEditor contentKey="ecosystem.cta.button" label="Texto do Botão CTA Final" />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default EcosystemContentTab;