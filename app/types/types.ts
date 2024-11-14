// types/types.ts
export interface ItemEstimativa {
  codigo: string;
  descricao: string;
  usts: string | number;
}

export interface CategoriaEstimativa {
  titulo: string;
  itens: ItemEstimativa[];
}

export interface Atividade {
  id: string;
  descricao: string;
  itensEstimativa: {
    item: ItemEstimativa;
    usts: number;
  }[];
  confirmada: boolean;
}

export interface Secao {
  id: number;
  nome: string;
  atividades: Atividade[];
}

export interface Estimativa {
  titulo: string;
  secoes: Secao[];
}
