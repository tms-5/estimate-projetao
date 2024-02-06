import Layout from "@/layout/layout";
import OffersProjects from "@/lib/components/appComponents/projects/OffersProjects";

export default function Offers() {
  return (
    <Layout
      childrenDev={<OffersProjects />}
      childrenCompany={<></>}
      companyHasntAccess={true}
    />
  );
}
