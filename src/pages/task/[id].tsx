"use client";
import Layout from "@/layout/layout";
import TaskByID from "@/lib/components/appComponents/task/Task";

export default function TaskById() {
  return <Layout childrenDev={<TaskByID/>} childrenCompany={<></>} />;
}
