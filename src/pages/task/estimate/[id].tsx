"use client";
import Layout from "@/layout/layout";
import TaskEstimate from "@/lib/components/appComponents/task/TaskEstimate";

export default function TaskById() {
  return <Layout childrenDev={<TaskEstimate/>} childrenCompany={<></>} />;
}
