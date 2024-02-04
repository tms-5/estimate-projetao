import { Company, User } from "@/store/definitions";
import { useState } from "react";
import DashboardStats from "../../dashboardStats/dashboardStats";
import TaskCard from "../../card/TaskCard";

export default function HomeDev(props: { user: User | Company }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <div className="w-max-100">
        <div className="mt-2r ml-2r">
          <p className="f-06 fw-500 c-teal-blue-100">
            {currentDate
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
                .slice(1)}
          </p>
          <h1 className="f-1-0 fw-500">
            Bem-vindo de volta, {props.user.name.split(" ")[0]}!
          </h1>
        </div>
        <div className="mt-2r w-max-100 h-fit d-flex direction-row flex-wrap-wrap gap-2 justify-center">
          <DashboardStats
            value="00"
            text="Contribuições em tarefas"
            type="regular"
            color="#3687ff"
          />
          <DashboardStats
            value="00"
            text="Estimativas corretas"
            type="regular"
            color="#3687ff"
          />
          <DashboardStats
            value="00"
            text="Participações em projetos"
            type="regular"
            color="#3687ff"
          />
          <DashboardStats
            value="R$ 00,00"
            text="Saldo da carteira"
            type="balance"
            color="#3687ff"
          />
          <DashboardStats
            value="+R$ 00,00"
            text="Este mês "
            type="profit"
            color="#3687ff"
          />
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
          />
        </div>
      </div>
    </>
  );
}
