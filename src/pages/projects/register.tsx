"use client";
import Layout from "@/layout/layout";
import ProjectCompanyRegister from "@/lib/components/appComponents/projects/ProjectCompanyRegister";

export default function Register() {
  return (
    <Layout
      childrenDev={<div />}
      childrenCompany={<ProjectCompanyRegister />}
      backto="Voltar para Projetos"
      backToRoute="/projects"
      // companyHasntAccess={true}
    />
  );
}
