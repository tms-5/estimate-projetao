"use-client";
import { TaskComments } from "@/store/definitions";
import { useEffect, useState } from "react";

export default function TaskComment({ comment }: { comment: TaskComments }) {
  const [abreviacao, setAbreviacao] = useState("");
  const [differenceInDays, setDifferenceInDays] = useState(0);

  const changeAbreviacao = (nome: string) => {
    if (nome) {
      let posicaoLetra = nome.indexOf(" ");
      let primeiraLetra = nome.substring(0, 1);
      let segundaLetra = nome.substring(posicaoLetra + 1, posicaoLetra + 2);
      setAbreviacao(primeiraLetra + segundaLetra);
    }
  };

  useEffect(() => {
    comment.user_name !== "" && changeAbreviacao(comment.user_name);
    const now = new Date();
    const differenceInMs = now.getTime() - comment.created_at.getTime();
    setDifferenceInDays(Math.floor(differenceInMs / (1000 * 60 * 60 * 24)));
  }, [comment]);

  return (
    <div className="p-5 bg-gray-5 b-10 mt-1r">
      <div className="d-flex align-items-center">
        <div className="circle mr-1r fw-500">{abreviacao}</div>
        <div className="f-08">{comment.user_name}</div>
        <div className="f-08 ml-1r">{differenceInDays} dias atrás</div>
      </div>
      <div className="d-grid grid-comments mt-1r">
        <div className="f-08">
          <strong>Senioridade: </strong>Desenvolvedor(a) {comment.level}
        </div>
        <div className="f-08">
          <strong>Tecnologia: </strong>
          {comment.framework}
        </div>
        <div className="f-08">
          <strong>Libs: </strong>
          {comment.libs.join(", ")}
        </div>
        <div className="f-08">
          <strong>Problemas encontrados: </strong>
          {comment.problems}
        </div>
        <div className="f-08">
          <strong>Sugestões: </strong>
          {comment.sugestions}
        </div>
      </div>
    </div>
  );
}
