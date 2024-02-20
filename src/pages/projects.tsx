"use client";
import Layout from "@/layout/layout";
import ProjectCompany from "@/lib/components/appComponents/projects/ProjectCompany";
import ProjectDev from "@/lib/components/appComponents/projects/ProjectDev";

function ProjectsPage() {
  return (
    <Layout
      backto="Voltar para Início"
      backToRoute="/home"
      childrenDev={<ProjectDev />} 
      childrenCompany={<ProjectCompany />} 
    />
  );
}

export default ProjectsPage;
