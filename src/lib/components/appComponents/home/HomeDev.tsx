import { useState } from "react";
import DashboardStats from "../../dashboardStats/dashboardStats";
import TaskCard from "../../card/TaskCard";
import { StatTypes } from "@/store/enum";
import { useAuth } from "@/context/AuthContext";
import PageTitle from "../../pageTitle/PageTitle";

export default function HomeDev() {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());

  let infosDevs = [
    {
      value: "00",
      text: "Contribuições em tarefas",
      color: "#A66EBA",
      type: StatTypes.regular,
    },
    {
      value: "00",
      text: "Estimativas corretas",
      color: "#3687ff",
      type: StatTypes.regular,
    },
    {
      value: "00",
      text: "Participações em projetos",
      color: "#83CBDA",
      type: StatTypes.regular,
    },
    {
      value: "00",
      text: "Saldo da carteira",
      color: "#3687ff",
      type: StatTypes.balance,
    },
    {
      value: "+R$ 00,00",
      text: "Este mês",
      color: "#008953",
      type: StatTypes.profit,
    },
  ];

  function returnDateAndTime() {
    return (
      currentDate
        .toLocaleString("pt-BR", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(".", "")
        .charAt(0)
        .toUpperCase() +
      currentDate
        .toLocaleString("pt-BR", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(".", "")
        .slice(1)
    );
  }
  return (
    <>
      <div className="w-max-100">
        <PageTitle
          title={returnDateAndTime()}
          subTitle={`Bem-vindo de volta, ${
            user && user.name && user.name.split(" ")[0]
          }!`}
        />
        <div className="mt-2r w-max-100 h-fit d-flex direction-row flex-wrap-wrap gap-2 justify-center">
          {infosDevs.map((card, i) => (
            <DashboardStats
              key={i}
              value={card.value}
              text={card.text}
              type={card.type}
              color={card.color}
            />
          ))}
        </div>

        <div className="w-fit ml-2r">
          <h2 className="mt-2r f-1-0 fw-500">Recente</h2>
          <div
            className="bg-space-blue-100 b-3 w-80"
            style={{ height: 3, marginTop: -10 }}
          />
        </div>
        <div className="w-100 mt-1r">
          <TaskCard
            id={""}
            nome={"Login"}
            descricao={"Criar tela de login"}
            projeto_id={""}
            avaliacoes={7}
            routerTo="/task/id"
          />
        </div>
        <div className="w-fit ml-2r">
          <h2 className="mt-2r f-1-0 fw-500">Tasks em alta</h2>
          <div
            className="bg-space-blue-100 b-3 w-80"
            style={{ height: 3, marginTop: -10 }}
          />
        </div>
        <div className="w-100 mt-1r">
          <TaskCard
            id={""}
            nome={"Login"}
            descricao={"Criar tela de login"}
            projeto_id={""}
            avaliacoes={7}
            routerTo="/task/id"
          />
        </div>
      </div>
    </>
  );
}
