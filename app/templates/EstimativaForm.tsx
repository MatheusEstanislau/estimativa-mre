'use client'
import { useState } from 'react'
import Secao from './Secao'
import VisualizarEstimativa from './VisualizarEstimativa'
import {
  CategoriaEstimativa,
  Estimativa,
  Secao as SecaoType,
  type Atividade,
} from '@/app/types/types'

interface EstimativaFormProps {
  repertorio: CategoriaEstimativa[]
}

const EstimativaForm: React.FC<EstimativaFormProps> = ({ repertorio }) => {
  const [estimativa, setEstimativa] = useState<Estimativa>({
    titulo: '',
    secoes: [],
  })

  const adicionarSecao = () => {
    const novaSecao: SecaoType = {
      id: estimativa.secoes.length,
      nome: `Seção ${estimativa.secoes.length + 1}`,
      atividades: [],
    }
    setEstimativa({ ...estimativa, secoes: [...estimativa.secoes, novaSecao] })
  }

  const atualizarNomeSecao = (secaoId: number, novoNome: string) => {
    const novasSecoes = estimativa.secoes.map((secao) =>
      secao.id === secaoId ? { ...secao, nome: novoNome } : secao,
    )
    setEstimativa({ ...estimativa, secoes: novasSecoes })
  }

  const atualizarAtividades = (secaoId: number, atividades: Atividade[]) => {
    const novasSecoes = estimativa.secoes.map((secao) =>
      secao.id === secaoId ? { ...secao, atividades } : secao,
    )
    setEstimativa({ ...estimativa, secoes: novasSecoes })
  }

  const excluirSecao = (secaoId: number) => {
    const novasSecoes = estimativa.secoes.filter(
      (secao) => secao.id !== secaoId,
    )
    setEstimativa({ ...estimativa, secoes: novasSecoes })
  }

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      <div className="form-section mb-2">
        <h1 className="mb-2">Estimativas de USTs</h1>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="titulo" className="font-bold">
            Título da estimativa
          </label>
          <input
            className="input input-bordered w-full "
            name="titulo"
            type="text"
            placeholder="Título da estimativa"
            value={estimativa.titulo}
            onChange={(e) =>
              setEstimativa({ ...estimativa, titulo: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-4 my-4">
          {estimativa.secoes.map((secao, index) => (
            <Secao
              key={index}
              secao={secao}
              repertorio={repertorio}
              atualizarAtividades={atualizarAtividades}
              atualizarNomeSecao={atualizarNomeSecao}
              excluirSecao={excluirSecao}
            />
          ))}
        </div>
        <button onClick={adicionarSecao} className="btn btn-primary">
          Adicionar Seção
        </button>
      </div>
      <VisualizarEstimativa estimativa={estimativa} />
    </div>
  )
}

export default EstimativaForm
