import { useState } from "react";
import DashboardStats from "../../dashboardStats/dashboardStats";
import TaskCard from "../../card/TaskCard";
import { StatTypes } from "@/store/enum";
import { useAuth } from "@/context/AuthContext";
import PageTitle from "../../pageTitle/PageTitle";
import { returnDateAndTime } from "./controller";

export default function HomeDev() {
  const { user } = useAuth();

  const randomContribution = Math.floor(Math.random() * 100);
  const rightEstimates = Math.floor(Math.random() * (randomContribution+1));
  const projectsColab = Math.floor(Math.random() * (rightEstimates+1));
  const wallet = Math.random() * (rightEstimates / 10);
  const monthProfit = Math.random() * wallet;

  let infosDevs = [
    {
      value: randomContribution,
      text: "Contribuições em tarefas",
      color: "#A66EBA",
      type: StatTypes.regular,
    },
    {
      value: rightEstimates,
      text: "Estimativas corretas",
      color: "#3687ff",
      type: StatTypes.regular,
    },
    {
      value: projectsColab,
      text: "Participações em projetos",
      color: "#83CBDA",
      type: StatTypes.regular,
    },
    {
      value: wallet.toFixed(2),
      text: "Saldo da carteira",
      color: "#3687ff",
      type: StatTypes.balance,
    },
    {
      value: `+R$ ${monthProfit.toFixed(2)}`,
      text: "Este mês",
      color: "#008953",
      type: StatTypes.profit,
    },
  ];

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
              value={card.value.toString()} // Convert card.value to a string
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
