import { actionTypes } from "@/store/enum";
import PageTitle from "../../pageTitle/PageTitle";
import FakeHistogram from "./Components/FakeHistogram";
import TaskInfo from "./Components/TaskInfo";
import { useEffect, useState } from "react";

export default function TaskByID() {
  const [user_can_view, set_user_can_view] = useState(false);

  let infoTask = {
    task_action: actionTypes.Desenvolver,
    component_action: "Tela de login",
    user_can_view: false,
    created_by: "Gabriela Alves",
  };

  function handleChangeUserCanView() {
    console.log("te");
    set_user_can_view(true);
  }

  return (
    <>
      <PageTitle title={"TASK"} subTitle={"Criar tela de login"} />
      <div className="f-08 m-0">Criado por {infoTask.created_by}</div>
      {user_can_view ? (
        <TaskInfo />
      ) : (
        <FakeHistogram handleChangeUserCanView={handleChangeUserCanView} />
      )}
    </>
  );
}
