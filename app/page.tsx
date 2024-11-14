import EstimativaForm from '@/app/templates/EstimativaForm'

const repertorio = [
  {
    titulo: 'Programa\u00e7\u00e3o',
    itens: [
      {
        codigo: 'P.1',
        descricao:
          'Programação de 1 operação de banco (criação, leitura, atualização, remoção) no back-end, com dados submetidos pelo front-end. Programação completa, incluindo validação do campo, sanitização das “strings” etc.',
        usts: 4,
      },
      {
        codigo: 'P.2',
        descricao:
          'Programação de 1 operação de banco (criação, leitura, atualização, remoção) no back-end, com dados submetidos pelo front-end, baseada em programação semelhante já existente ou CRUD.',
        usts: 2,
      },
      {
        codigo: 'P.3',
        descricao: 'Programação de 1 funcionalidade simples, no front-end.',
        usts: '2 para a primeira, 0,5 para as demais repetidas',
      },
      {
        codigo: 'P.4',
        descricao:
          'Programação de validação de campos de formulário, no front-end, com mensagens ao usuário.',
        usts: '0,5 por campo',
      },
      {
        codigo: 'P.5',
        descricao:
          'Programação de funcionalidade no front-end, completa, com tratamento de dados, validação, submissão ao back-end e tratamento e incorporação do retorno.',
        usts: 4,
      },
      {
        codigo: 'P.6',
        descricao:
          'Programação de teste unitário. A programação de teste unitário será remunerada com o mesmo número de USTs da função/método/serviço que esse teste visa a testar.',
        usts: 'Conforme explicado na descrição.',
      },
      {
        codigo: 'P.7',
        descricao:
          'Alteração de programação de operação de banco. Esta atividade envolve todo o escopo da alteração (banco e programação).',
        usts: 2,
      },
      {
        codigo: 'P.8',
        descricao:
          'Alteração pontual de funcionalidade existente, no back-end para arquitetura orientada a  serviço ou para aplicações monólitos.',
        usts: '0,5 por método ou regra negocial',
      },
      {
        codigo: 'P.9',
        descricao:
          'Programação de método para gravação de logs, com teste e debug incluídos.',
        usts: 2,
      },
      {
        codigo: 'P.10',
        descricao:
          'Implementação de funcionalidades de backend, incluindo a criação de métodos para atender a regras de negócio. A atividade abrange manipulação de dados, realização de cálculos, formatações, operações condicionais e processamento de lógica de negócio.',
        usts: 2,
      },
    ],
  },
  {
    titulo: 'Implanta\u00e7\u00e3o',
    itens: [
      {
        codigo: 'IM.1',
        descricao:
          'Implantação do sistema em homologação (trabalho completo, incluindo geração de builds, scripts etc.)',
        usts: 0.5,
      },
      {
        codigo: 'IM.2',
        descricao:
          'Implantação do sistema em produção (trabalho completo, incluindo geração de builds, scripts etc.)',
        usts: 0.5,
      },
      {
        codigo: 'IM.3',
        descricao:
          'Análise de problema em subida/funcionamento de versão. Esta análise somente será remunerada se, ao seu final, confirmar-se que o problema é do MRE. Se for erro causado pela CONTRATADA, o item não é remunerado.',
        usts: 2,
      },
    ],
  },
  {
    titulo: 'Teste',
    itens: [
      {
        codigo: 'T.1',
        descricao: 'Teste e Debug funcionalidades novas.',
        usts: 1,
      },
      {
        codigo: 'T.2',
        descricao: 'Teste e Debug para manutenção.',
        usts: 0.5,
      },
      {
        codigo: 'T.3',
        descricao:
          'Teste e Debug para manutenção, de sistemas críticos, com dependências de outros sistemas.',
        usts: 2,
      },
    ],
  },
  {
    titulo: 'Homologação',
    itens: [
      {
        codigo: 'H.1',
        descricao: 'Reunião de apresentação e validação.',
        usts: '1 por hora',
      },
    ],
  },
  {
    titulo: 'Constru\u00e7\u00e3o',
    itens: [
      {
        codigo: 'IC.1',
        descricao: 'Plano de build',
        usts: 4,
      },
      {
        codigo: 'IC.2',
        descricao: 'Build com teste unit\u00e1rio e Sonar',
        usts: 6,
      },
      {
        codigo: 'IC.3',
        descricao: 'Deploy para tr\u00eas ambientes',
        usts: 10,
      },
      {
        codigo: 'IC.4',
        descricao: 'Deploy para builds de front-end complexos',
        usts: 12,
      },
    ],
  },
  {
    titulo: 'Monitoramento',
    itens: [
      {
        codigo: 'M.1',
        descricao: 'Monitoramento di\u00e1rio',
        usts: '0,5 por sistema',
      },
    ],
  },
  {
    titulo: 'CMS',
    itens: [
      {
        codigo: 'CMS.1',
        descricao: 'Corre\u00e7\u00e3o de problema de XML em Kitweb',
        usts: 1.5,
      },
    ],
  },
  {
    titulo: 'Sistemas Web',
    itens: [
      {
        codigo: 'W.1',
        descricao: 'Concess\u00e3o/revoga\u00e7\u00e3o de acesso',
        usts: '0,5 por 3 usu\u00e1rios',
      },
      {
        codigo: 'W.2',
        descricao: 'Acesso via hardcode',
        usts: '1 por 3 usu\u00e1rios',
      },
    ],
  },
  {
    titulo: 'Sistemas Legados',
    itens: [
      {
        codigo: 'ACC.1',
        descricao: 'Concess\u00e3o de acesso a usu\u00e1rio',
        usts: 2,
      },
      {
        codigo: 'ACC.2',
        descricao: 'Corre\u00e7\u00e3o de problema de banco de dados',
        usts: 1,
      },
    ],
  },
  {
    titulo: 'Treinamento/Suporte',
    itens: [
      {
        codigo: 'TRE.1',
        descricao: 'Treinamento t\u00e9cnico',
        usts: '1 por hora',
      },
    ],
  },
  {
    titulo: 'Extreme Programming',
    itens: [
      {
        codigo: 'XP.1',
        descricao: 'Programa\u00e7\u00e3o em par',
        usts: 'Igual \u00e0 demanda principal',
      },
    ],
  },
  {
    titulo: 'Code Review',
    itens: [
      {
        codigo: 'CR.1',
        descricao: 'Revis\u00e3o de c\u00f3digo',
        usts: '0,5 por funcionalidade',
      },
    ],
  },
  {
    titulo: 'Design UX/Design Thinking',
    itens: [
      {
        codigo: 'D.1',
        descricao: 'Elaboração de template novo para um sistema novo.',
        usts: '8',
      },
      {
        codigo: 'D.2',
        descricao: 'Adaptação de template existente para um sistema novo.',
        usts: '4',
      },
      {
        codigo: 'D.3',
        descricao:
          'Elaboração de tela (html/css) baseada em template existente.',
        usts: '2',
      },
      {
        codigo: 'D.4',
        descricao:
          'Elaboração de tela (html/css) baseada em template, mas que contenha itens que exijam diagramação única. A exemplo, como um mapa, ou imagem específica.',
        usts: '2',
      },
      {
        codigo: 'D.5',
        descricao:
          'Elaboração de tela (html/css/js) com componentes existentes no cookbook.',
        usts: '2',
      },
      {
        codigo: 'D.6',
        descricao:
          'Elaboração de tela (html/css/js) com componentes que exijam novos itens ou a personalização de itens do cookbook.',
        usts: '7',
      },
      {
        codigo: 'D.7',
        descricao:
          'Alteração de tela (html/css/js) que impacte na personalização de componente.',
        usts: '4',
      },
      {
        codigo: 'D.8',
        descricao: 'Alteração pontual em tela (html/css) existente.',
        usts: '0,5',
      },
    ],
  },
  {
    titulo: 'An\u00e1lise',
    itens: [
      {
        codigo: 'PA.1-A.11',
        descricao: 'An\u00e1lise e modelagem de solu\u00e7\u00f5es',
        usts: '1 a 30',
      },
    ],
  },
  {
    titulo: 'Consultoria',
    itens: [
      {
        codigo: 'CON.1-CON.5',
        descricao: 'Consultorias diversas',
        usts: '1 por hora (m\u00e1ximo de 6 por dia)',
      },
    ],
  },
  {
    titulo: 'Banco de Dados',
    itens: [
      {
        codigo: 'DB.1',
        descricao:
          'Criação de script para operação direta em banco de dados, incluindo até 10 sub-variações em seus parâmetros.',
        usts: '2',
      },
      {
        codigo: 'DB.2',
        descricao:
          'Teste de script de operação direta em banco de dados (apenas quando necessário).',
        usts: '0,5',
      },

      {
        codigo: 'DB.3',
        descricao: 'Alteração em tabela única - DDL - ALTER.',
        usts: '0,5',
      },
      {
        codigo: 'DB.4',
        descricao: 'Criação de script de DDL (CREATE, ALTER E DROP).',
        usts: '0,5',
      },
    ],
  },
  {
    titulo: 'Estudo de C\u00f3digo-Fonte',
    itens: [
      {
        codigo: 'CF.1',
        descricao: 'Estudo de c\u00f3digo-fonte',
        usts: '1 por hora',
      },
    ],
  },
  {
    titulo: 'Pleitos',
    itens: [
      {
        codigo: 'PL.1',
        descricao: 'Compensa\u00e7\u00e3o por trabalho extra',
        usts: '1 por hora',
      },
    ],
  },
  {
    titulo: 'Documenta\u00e7\u00e3o',
    itens: [
      {
        codigo: 'DOC.1-DOC.4',
        descricao: 'Documenta\u00e7\u00e3o e retrospectiva',
        usts: '0,5 a 1,5',
      },
    ],
  },
]

export default function Home() {
  return <EstimativaForm repertorio={repertorio} />
}
