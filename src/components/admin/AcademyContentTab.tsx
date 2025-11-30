import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentEditor from './ContentEditor';

const AcademyContentTab = () => {
  return (
    <Tabs defaultValue="hero" className="space-y-6">
      <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="pain">Dor</TabsTrigger>
        <TabsTrigger value="differential">Diferenciais</TabsTrigger>
        <TabsTrigger value="founders">Fundadores</TabsTrigger>
        <TabsTrigger value="program">Programa</TabsTrigger>
        <TabsTrigger value="location">Localização</TabsTrigger>
        <TabsTrigger value="contact">Contato</TabsTrigger>
      </TabsList>

      <TabsContent value="hero" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Hero (Página Academy)</h2>
        <ContentEditor contentKey="hero.headline" label="Título Principal (Parte 1)" />
        <ContentEditor contentKey="hero.headline.gold" label="Título Principal (Parte Dourada)" />
        <ContentEditor contentKey="hero.subheadline" label="Subtítulo" />
        <ContentEditor contentKey="hero.description" label="Descrição" multiline />
      </TabsContent>

      <TabsContent value="pain" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Dor (Página Academy)</h2>
        <ContentEditor contentKey="pain.headline" label="Título" />
        <ContentEditor contentKey="pain.subheadline" label="Subtítulo" />
        <ContentEditor contentKey="pain.text1" label="Texto 1" multiline />
        <ContentEditor contentKey="pain.text2" label="Texto 2" multiline />
        <ContentEditor contentKey="pain.mission" label="Missão F3S" />
      </TabsContent>

      <TabsContent value="differential" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Diferenciais (Página Academy)</h2>
        <ContentEditor contentKey="differential.headline" label="Título" />
        <ContentEditor contentKey="differential.subheadline" label="Subtítulo" />
      </TabsContent>

      <TabsContent value="founders" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Fundadores (Página Academy - Detalhado)</h2>
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
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Programa (Página Academy)</h2>
        <ContentEditor contentKey="program.headline" label="Título" />
        <ContentEditor contentKey="program.subheadline" label="Subtítulo" />
      </TabsContent>

      <TabsContent value="location" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Localização (Página Academy)</h2>
        <ContentEditor contentKey="location.headline" label="Título (Parte 1)" />
        <ContentEditor contentKey="location.headline.gold" label="Título (Parte Dourada)" />
        <ContentEditor contentKey="location.subheadline" label="Subtítulo" />
        <ContentEditor contentKey="location.city" label="Cidade" />
        <ContentEditor contentKey="location.subtitle" label="Subtítulo da Localização" />
      </TabsContent>

      <TabsContent value="contact" className="space-y-6 bg-card rounded-2xl p-6">
        <h2 className="text-2xl font-heading font-bold mb-4">Seção Contato (Página Academy)</h2>
        <ContentEditor contentKey="contact.headline" label="Título" />
        <ContentEditor contentKey="contact.subheadline" label="Subtítulo" />
      </TabsContent>
    </Tabs>
  );
};

export default AcademyContentTab;