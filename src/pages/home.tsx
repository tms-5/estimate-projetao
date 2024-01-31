"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "@/lib/components/sidebar/Sidebar";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/store/main";
import DashboardStats from "@/lib/components/dashboardStats/dashboardStats";

function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (user === "" || user === null) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isAuthenticated()
        ? user &&
          typeof user !== "string" && (
            <Sidebar user={user!}>
              <div className="mt-2r">
                <p className="f-06 fw-500 c-teal-blue-100">
                  {currentDate.toLocaleString("pt-BR", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).replace(".", "").charAt(0).toUpperCase() +
                    currentDate.toLocaleString("pt-BR", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).replace(".", "").slice(1)
                }
                </p>
                <h1 className="f-1-0 fw-500">
                  Bem-vindo de volta, {user.name.split(" ")[0]}!
                </h1>
              </div>
              <div className="mt-2r w-100 h-fit d-flex direction-row flex-wrap-wrap gap-2 justify-center">
                <DashboardStats value="00" text="Contribuições em tarefas" type="regular" color="#3687ff" />
                <DashboardStats value="00" text="Estimativas corretas" type="regular" color="#3687ff" />
                <DashboardStats value="00" text="Participações em projetos" type="regular" color="#3687ff" />
                <DashboardStats value="R$ 00,00" text="Saldo da carteira" type="balance" color="#3687ff" />
                <DashboardStats value="+R$ 00,00" text="Este mês " type="profit" color="#3687ff" />
              </div>
            </Sidebar>
          )
        : null}
    </>
  );
}

export default DashboardPage;
