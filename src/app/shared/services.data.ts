export interface ServiceDocument {
  label: string;
  url?: string;
}

export interface ServiceInfo {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
  documentsLabel: string;
  documents: ServiceDocument[];
}

export interface ServiceCategory {
  name: string;
  icon: string;
  services: ServiceInfo[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Alterações e Modificações',
    icon: 'fa-wrench',
    services: [
      {
        icon: 'fa-tachometer-alt',
        title: 'Alteração de Potência/Cilindrada',
        description: 'Inspeção para qualquer diminuição ou qualquer aumento até 10% superior ao original, conforme Anexo V da Resolução 916/22.',
        featured: true,
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Notas fiscais da modificação' },
          { label: 'Ensaio do Dinamômetro' },
          { label: 'ART do Engenheiro Mecânico' }
        ]
      },
      {
        icon: 'fa-wrench',
        title: 'Veículo Modificado',
        description: 'Inspeção para veículos com modificações estruturais, carroceria, chassi ou equipamentos.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Notas fiscais da modificação' },
          { label: 'CAT e ART (quando aplicável)' }
        ]
      },
      {
        icon: 'fa-home',
        title: 'Motor-casa',
        description: 'Inspeção para veículos adaptados para motor-casa conforme regulamentação.',
        documentsLabel: 'Documentos de referência:',
        documents: [
          {
            label: 'Resolução CONTRAN nº 743/2018',
            url: 'https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/51523850/do1-2018-11-23-resolucao-n-743-de-12-de-novembro-de-2018-51523534'
          },
          {
            label: 'Portaria DENATRAN',
            url: 'https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/69873315'
          }
        ]
      }
    ]
  },
  {
    name: 'Inspeções Periódicas',
    icon: 'fa-calendar-check',
    services: [
      {
        icon: 'fa-leaf',
        title: 'GNV Periódica',
        description: 'Inspeção obrigatória anual para veículos com sistema de GNV instalado.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Selo de inspeção anterior' }
        ]
      },
      {
        icon: 'fa-cogs',
        title: 'Inclusão/Retirada Kit GNV',
        description: 'Inspeção para instalação ou remoção do sistema de GNV no veículo.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Notas fiscais e atestados' }
        ]
      }
    ]
  },
  {
    name: 'Sinistro e Casos Especiais',
    icon: 'fa-car-crash',
    services: [
      {
        icon: 'fa-car-crash',
        title: 'Veículo Sinistro',
        description: 'Inspeção para veículos que se envolveram em acidentes ou foram bloqueados por seguradoras.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Notas fiscais dos reparos' },
          { label: 'B.O. (se sem placas)' }
        ]
      },
      {
        icon: 'fa-bus',
        title: 'Inspeção Especial',
        description: 'Inspeção para veículos escolares, ANTT, DER, moto-frete e URBS.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' },
          { label: 'Aferição do Tacógrafo (quando aplicável)' }
        ]
      }
    ]
  },
  {
    name: 'Documentação Internacional',
    icon: 'fa-globe-americas',
    services: [
      {
        icon: 'fa-globe-americas',
        title: 'CITV - Mercosul',
        description: 'Certificado de Inspeção Técnica Veicular para transporte rodoviário internacional.',
        documentsLabel: 'Documentos necessários:',
        documents: [
          { label: 'CRLV/CRV ou Nota Fiscal' },
          { label: 'RG/CPF ou CNH do proprietário' }
        ]
      }
    ]
  }
];
