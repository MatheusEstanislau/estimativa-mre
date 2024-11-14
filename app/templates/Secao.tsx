// components/Seção.tsx
import { useState } from "react";
import Atividade from "./Atividade";
import {
  CategoriaEstimativa,
  Secao as SecaoType,
  Atividade as AtividadeType,
} from "@/app/types/types";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/app/components/SortableItem";
import { v4 as uuidv4 } from "uuid"; // Biblioteca para gerar UUIDs

interface SecaoProps {
  secao: SecaoType;
  repertorio: CategoriaEstimativa[];
  atualizarAtividades: (secaoId: number, atividades: AtividadeType[]) => void;
  atualizarNomeSecao: (secaoId: number, novoNome: string) => void;
  excluirSecao: (secaoId: number) => void;
}

const Secao: React.FC<SecaoProps> = ({
  secao,
  repertorio,
  atualizarAtividades,
  atualizarNomeSecao,
  excluirSecao,
}) => {
  const [atividades, setAtividades] = useState<AtividadeType[]>(secao.atividades);

  const adicionarAtividade = () => {
    const novaAtividade: AtividadeType = {
      id: uuidv4(), // Gera um identificador único
      descricao: "",
      itensEstimativa: [],
      confirmada: false,
    };
    const novasAtividades = [...atividades, novaAtividade];
    setAtividades(novasAtividades);
    atualizarAtividades(secao.id, novasAtividades);
  };

  const atualizarAtividade = (indice: number, atividade: AtividadeType) => {
    const novasAtividades = [...atividades];
    novasAtividades[indice] = atividade;
    setAtividades(novasAtividades);
    atualizarAtividades(secao.id, novasAtividades);
  };

  const excluirAtividade = (atividadeId: string) => {
    const novasAtividades = atividades.filter(
      (atividade) => atividade.id !== atividadeId
    );
    setAtividades(novasAtividades);
    atualizarAtividades(secao.id, novasAtividades);
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      // Configurações para dispositivos móveis
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  const onDragEnd = (event: DragEndEvent) => {  
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = atividades.findIndex((atv) => atv.id === active.id);
      const newIndex = atividades.findIndex((atv) => atv.id === over?.id);

      const novasAtividades = arrayMove(atividades, oldIndex, newIndex);
      setAtividades(novasAtividades);
      atualizarAtividades(secao.id, novasAtividades);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={secao.nome}
          onChange={(e) => atualizarNomeSecao(secao.id, e.target.value)}
          className="input input-bordered w-full "         />
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={atividades.map((atv) => atv.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-2">
            {atividades.map((atividade, index) => (
              <SortableItem key={atividade.id} id={atividade.id}>
                <Atividade
                  atividade={atividade}
                  repertorio={repertorio}
                  atualizarAtividade={(atv) => atualizarAtividade(index, atv)}
                  excluirAtividade={() => excluirAtividade(atividade.id)}
                />
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={adicionarAtividade}
        className="btn btn-success"      >
        Adicionar Atividade
      </button>
      <button
        onClick={() => excluirSecao(secao.id)}
        className="btn btn-error"      >
        Excluir Seção
      </button>
    </div>
  );
};

export default Secao;
