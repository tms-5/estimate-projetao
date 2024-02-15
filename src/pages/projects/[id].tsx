import Layout from "@/layout/layout";
import ProjectCompanyByID from "@/lib/components/appComponents/projects/ProjectCompanyByID";
import ProjectDevByID from "@/lib/components/appComponents/projects/ProjectDevByID";

export default function ProjectById() {
  return (
    <Layout
      childrenDev={<ProjectDevByID />}
      childrenCompany={<ProjectCompanyByID />}
    />
  );
}
