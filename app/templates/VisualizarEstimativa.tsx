// components/VisualizarEstimativa.tsx
import { Estimativa } from "@/app/types/types";

interface VisualizarEstimativaProps {
  estimativa: Estimativa;
}

const VisualizarEstimativa: React.FC<VisualizarEstimativaProps> = ({
  estimativa,
}) => {
  return (
    <div className="visualizar-estimativa">
      <h2 className="text-2xl font-bold mb-3">{estimativa.titulo}</h2>
      {estimativa.secoes.map((secao, secaoIndex) => (
        <div key={secaoIndex} className="flex flex-col">
          <h3 className="text-xl font-bold">
            {secao.nome}{" "}
            {`${secao.atividades.reduce(
              (acc, value) =>
                acc +
                value.itensEstimativa.reduce(
                  (acc, itemEstimativa) => acc + itemEstimativa.usts,
                  0
                ),
              0
            )} UST's`} 
          </h3>
          {secao.atividades.map((atividade, atividadeIndex) => (
            <div key={atividadeIndex} className="mt-2">
              <p className="mb-2">
                <strong>{atividade.descricao}</strong>
              </p> 
              {atividade.itensEstimativa.map((estimativaItem, itemIndex) => (
                <p key={itemIndex}>
                  {estimativaItem.item.codigo} - {estimativaItem.item.descricao}{" "}
                  - <strong>{`${estimativaItem.usts} UST's`} </strong>
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VisualizarEstimativa;
