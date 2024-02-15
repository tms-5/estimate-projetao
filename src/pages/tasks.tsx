"use client";
import TaskDev from "@/lib/components/appComponents/task/TaskDev";
import TaskCompany from "@/lib/components/appComponents/task/TaskCompany";
import Layout from "@/layout/layout";

function TasksPage() {
  return (
    <>
      <Layout
        backto="Voltar para Início"
        backToRoute="/home"
        childrenDev={<TaskDev />}
        childrenCompany={<TaskCompany />}
      />
    </>
  );
}

export default TasksPage;
