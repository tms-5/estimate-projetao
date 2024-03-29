import React from "react";
import { TaskIcon, UserIcon } from "@/lib/assets/icon";
import Image from "next/image";
import Button from "../button/Button";
import { TaskCard } from "@/store/definitions";
import { useRouter } from "next/router";

const TaskCard: React.FC<TaskCard> = ({
  id,
  descricao,
  projeto_id,
  avaliacoes,
  routerTo,
}) => {
  const router = useRouter();
  return (
    <div className="task-card ml-2r">
      <div className="d-flex w-100 h-fit align-items-center justify-s-b">
        <Image src={TaskIcon} alt="task icon" width={20} height={20} />
        <div className="d-flex centralizar-meio align-items-center">
          <p className="mr-05 c-teal-blue-100 fw-600">{avaliacoes}</p>
          <Image src={UserIcon} alt="user icon" width={20} height={20} />
        </div>
      </div>
      <p style={{ margin: 0 }}>{descricao}</p>
      <div className="d-flex w-100 justify-end">
        <Button
          text="Ver tarefa"
          class="task-button"
          onClick={() => router.push(routerTo || "")}
        />
      </div>
    </div>
  );
};

export default TaskCard;
