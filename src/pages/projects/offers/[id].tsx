import Layout from "@/layout/layout";
import OfferProjectByID from "@/lib/components/appComponents/projects/OfferProjectByID";

export default function OfferById() {
  return (
    <Layout
      childrenDev={<OfferProjectByID />}
      childrenCompany={<></>}
      companyHasntAccess={true}
    />
  );
}
