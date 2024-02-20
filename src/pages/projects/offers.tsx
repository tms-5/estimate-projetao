"use client";
import Layout from "@/layout/layout";
import OffersProjects from "@/lib/components/appComponents/projects/OffersProjects";
import ProjectCompany from "@/lib/components/appComponents/projects/ProjectCompany";

export default function Offers() {
  return (
    <Layout
      childrenDev={<OffersProjects />}
      childrenCompany={<ProjectCompany />}
      backto="Voltar para Projetos"
      backToRoute="/projects"
      // companyHasntAccess={true}
    />
  );
}
