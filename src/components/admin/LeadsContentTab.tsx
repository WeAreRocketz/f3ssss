import { Button } from '@/components/ui/button';
import { Download, Database, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadsContentTab = () => {
  const { toast } = useToast();

  const generatePipedriveCsvTemplate = () => {
    const headers = [
      "Deal Title", 
      "Person Name", 
      "Organization Name", 
      "Phone", 
      "Role", 
      "Source", 
      "Date Added",
      "Stage"
    ];
    
    const exampleRow = [
      "Novo Lead - [Nome da Empresa]", 
      "Nome do Contato", 
      "Nome da Empresa", 
      "5547999999999", 
      "Cargo do Contato", 
      "F3S Website", 
      new Date().toISOString().split('T')[0],
      "Lead In"
    ];

    const csvContent = [
      headers.join(','),
      exampleRow.join(',')
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'pipedrive_template_f3s.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Template CSV baixado!',
      description: 'Use este formato para importar leads manualmente no Pipedrive.',
    });
  };

  return (
    <div className="space-y-6 bg-card rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Database className="w-6 h-6 text-accent" />
        <h2 className="text-2xl font-heading font-bold">Gestão de Leads (Integração Zapier)</h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>💡 Fluxo de Dados:</strong> O formulário envia os dados diretamente para o Zapier (via Webhook), que cria o Negócio e a Pessoa no Pipedrive.
        </p>
        <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
          <strong>⚠️ Visibilidade:</strong> Para visualizar, filtrar e exportar os leads, você deve acessar o Pipedrive diretamente. O Painel Admin não armazena os leads.
        </p>
      </div>

      <div className="space-y-4 border-t pt-6">
        <h3 className="font-semibold text-lg">Ferramentas de Exportação</h3>
        <p className="text-muted-foreground text-sm">
          Use o botão abaixo para baixar um template CSV que corresponde ao formato de importação do Pipedrive, caso precise de uma exportação manual ou para garantir que seus dados no Zapier estejam mapeados corretamente.
        </p>
        <Button onClick={generatePipedriveCsvTemplate} className="bg-accent hover:bg-accent/90">
          <FileText className="w-4 h-4 mr-2" />
          Download Template Pipedrive CSV
        </Button>
      </div>
    </div>
  );
};

export default LeadsContentTab;