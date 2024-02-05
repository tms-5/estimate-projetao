"use-client";
import { Histogram } from "@/lib/components/charts/Histogram/Histogram";
import { seniorityType } from "@/store/enum";
import { useEffect, useState } from "react";
import TaskComment from "./TaskComment";

export default function TaskInfo() {
  let TaskComments = [
    {
      user_name: "Gabriela Alves",
      created_at: "2024-02-03T02:23:41.435854",
      level: seniorityType.sr,
      framework: ["React"],
      libs: ["Redux", "Formik"],
      problems:
        "Tive problemas na hora de recuperar as informações do Formik porque quis criar a função de uma forma reutilizável e só depois que eu entendi que tinha que passar a função de alteração do estado já como um parametro para que fosse possível",
      sugestions:
        "Pensem na estrutura completa e possíveis alterações por parte do projeto. Tenham em mente que o projeto pode mudar, então sempre considerem produtos escaláveis e códigos genéricos e reutilizáveis.",
      estimated_time: 10,
      real_time: 8.5,
    },
  ];

  let TaskData = {
    frameworks: ["React", "Svelte"],
    libs: ["Redux", "Formik"],
    requirements: [
      "Capacidade do usuário recuperar a senha.",
      "Capacidade dos usuários poderem visualizar a senha com tipo texto ou password.",
      "Verificar se os campos não estão em branco.",
      "Verificar se a senha atende os requisitos de segurança do banco.",
      "Exibir mensagens de erro claras para entradas inválidas.",
      "Exibir botão para se registrar.",
      "Enviar credenciais para o servidor de forma segura.",
      "Limitar número de tentativas de login.",
      "Montar animação de carregamento enquanto está autenticando.",
      "Exibir mensagem de sucesso ou erro quando autenticado.",
      "Autenticação multifatorial, se aplicável.",
      "Garantir que a tela seja acessível, suportando navegação pelo teclado.",
      "Garantir que a tela seja responsível.",
    ],
    histogram_junior: [5, 12, 8.3, 2.3, 8.3, 5.08, 2.3, 2.48, 6.35, 2.3, 2.3],
    histogram_avg_junior: 8.3,
    estimated_avg_junior: 16,
    histogram_pleno: [5, 7, 4.5, 6.2, 7.5, 6.5, 6.5],
    histogram_avg_pleno: 6.5,
    estimated_avg_pleno: 10,
    histogram_senior: [5, 5, 4.2, 6.2, 7.5, 8, 4.5],
    histogram_avg_senior: 5,
    estimated_avg_senior: 8,
    comments: TaskComments,
  };

  let TaskInformations = {
    data: TaskData,
    comments: TaskComments,
  };

  const [size, setSize] = useState(500);

  useEffect(() => {
    const updateSize = () => {
      const layout = document.getElementById("Layout");
      if (layout) {
        setSize(layout.offsetWidth / 3 - 200);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      <p className="f-06 fw-700 c-teal-blue-100 mt-2r">
        INFORMAÇÕES ADICIONAIS
      </p>
      <p className="f-07 fw-700">Requisitos ou caso de uso:</p>
      <ul className="f-07">
        {TaskData.requirements.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <div className="d-flex justify-s-b blur-histogram mt-2r mr-2r">
        <div>
          <Histogram
            data={TaskData.histogram_junior}
            width={size}
            height={300}
          />
          <p className="f-07 fw-700 c-teal-blue-100 m-0 uppercase">
            {seniorityType.jr}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio utilizado: </strong>
            {TaskData.histogram_avg_junior}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio estimado: </strong>
            {TaskData.estimated_avg_junior}
          </p>
        </div>
        <div>
          <Histogram
            data={TaskData.histogram_pleno}
            width={size}
            height={300}
          />{" "}
          <p className="f-07 fw-700 c-teal-blue-100 m-0 uppercase">
            {seniorityType.pl}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio utilizado: </strong>
            {TaskData.histogram_avg_pleno}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio estimado: </strong>
            {TaskData.estimated_avg_pleno}
          </p>
        </div>
        <div>
          <Histogram
            data={TaskData.histogram_senior}
            width={size}
            height={300}
          />{" "}
          <p className="f-07 fw-700 c-teal-blue-100 m-0 uppercase">
            {seniorityType.sr}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio utilizado: </strong>
            {TaskData.histogram_avg_senior}
          </p>
          <p className="f-08 m-0">
            <strong>Tempo médio estimado: </strong>
            {TaskData.estimated_avg_senior}
          </p>
        </div>
      </div>

      {TaskComments.map((comment, index) => {
        return <TaskComment comment={comment} key={index} />;
      })}
    </>
  );
}
