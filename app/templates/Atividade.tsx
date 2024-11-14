// components/Atividade.tsx
import { useState, useEffect } from "react";
import {
  CategoriaEstimativa,
  ItemEstimativa,
  Atividade as AtividadeType,
} from "@/app/types/types";

interface AtividadeProps {
  atividade: AtividadeType;
  repertorio: CategoriaEstimativa[];
  atualizarAtividade: (atividade: AtividadeType) => void;
  excluirAtividade: () => void;
}

const Atividade: React.FC<AtividadeProps> = ({
  atividade,
  repertorio,
  atualizarAtividade,
  excluirAtividade,
}) => {
  const [descricao, setDescricao] = useState(atividade.descricao || "");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState<ItemEstimativa | null>(
    null
  );
  const [ustsItem, setUstsItem] = useState(0);
  const [itensEstimativa, setItensEstimativa] = useState(
    atividade.itensEstimativa || []
  );
  const [confirmada] = useState(atividade.confirmada || false); 

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaSelecionada(e.target.value);
  };

  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = repertorio
      .find((cat) => cat.titulo === categoriaSelecionada)
      ?.itens.find((i) => i.codigo === e.target.value);
    setItemSelecionado(item || null);

    // Definir USTs caso o item tenha um valor fixo
    if (item && typeof item.usts === "number") {
      setUstsItem(Number(item.usts));
    } else {
      setUstsItem(0); // Necessário inserir manualmente
    }
  };

  const adicionarItemEstimativa = () => {
    if (itemSelecionado && ustsItem > 0) {
      const novoItem = { item: itemSelecionado, usts: ustsItem };
      const novosItensEstimativa = [...itensEstimativa, novoItem];
      setItensEstimativa(novosItensEstimativa);

      atualizarAtividade({
        ...atividade,
        descricao,
        itensEstimativa: novosItensEstimativa,
        confirmada,
      });

      setItemSelecionado(null);
      setCategoriaSelecionada("");
      setUstsItem(0);
    }
  };

  const excluirItemEstimativa = (index: number) => {
    const novosItensEstimativa = itensEstimativa.filter((_, i) => i !== index);
    setItensEstimativa(novosItensEstimativa);
    atualizarAtividade({
      ...atividade,
      descricao,
      itensEstimativa: novosItensEstimativa,
      confirmada,
    });
  };

  useEffect(() => {
    atualizarAtividade({
      ...atividade,
      descricao,
      itensEstimativa,
      confirmada,
    });
  }, [descricao, itensEstimativa, confirmada]);

  

  return (
    <div className="p-6 pl-8 flex-col gap-8 border-2 border-solid border-gray-200 rounded-md">
      <div className="flex flex-col gap-4">
        <div >
          <label htmlFor="atividade" className="font-bold ">
            Nome da atividade
          </label>
          <input
            name="atividade"
            type="text"
            placeholder="Descrição da atividade"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="input input-bordered w-full " 
                      />
        </div>
        <select
          onChange={handleCategoriaChange}
          value={categoriaSelecionada}
          className="select select-accent w-full"
        >
          <option value="">Selecione uma categoria</option>
          {repertorio.map((categoria, index) => (
            <option key={index} value={categoria.titulo}>
              {categoria.titulo}
            </option>
          ))}
        </select>
        {categoriaSelecionada && (
          <select
            onChange={handleItemChange}
            value={itemSelecionado?.codigo || ""}
            className="select select-accent w-full"
            >
            <option value="">Selecione uma estimativa</option>
            {repertorio
              .find((cat) => cat.titulo === categoriaSelecionada)
              ?.itens.map((item, index) => (
                <option key={index} value={item.codigo}>
                  {item.codigo} {item.descricao} {item.usts}
                </option>
              ))}
          </select>
        )}
        {itemSelecionado && typeof itemSelecionado.usts !== "number" && (
          <input
            type="number"
            placeholder="USTs"
            value={ustsItem}
            onChange={(e) => setUstsItem(Number(e.target.value))}
            className="input input-bordered w-full " 
          />
        )}
        <button onClick={adicionarItemEstimativa} className="btn btn-success self-start">
          Adicionar Item
        </button>
      </div>

      <div className="flex flex-col my-6">
        <h4>Itens Selecionados:</h4>
        {itensEstimativa.map((estimativa, index) => (
          <div key={index} className="flex gap-2 items-center my-2">
            <p>
              {estimativa.item.codigo} - {estimativa.item.descricao} -{" "}
              <span className="font-bold" >{estimativa.usts} UST&apos;s</span>
            </p>
            <button
              onClick={() => excluirItemEstimativa(index)}
              className="btn btn-error"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>


      <button onClick={excluirAtividade} className="btn btn-error">
        Excluir Atividade
      </button>
    </div>
  );
};

export default Atividade;
