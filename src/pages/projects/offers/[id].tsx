import Layout from "@/layout/layout";
import OfferProjectByID from "@/lib/components/appComponents/projects/OfferProjectByID";

export default function OfferById() {
  return (
    <Layout
      backto="Voltar"
      backToRoute="/projects/offers"
      childrenDev={<OfferProjectByID />}
      childrenCompany={<></>}
      // companyHasntAccess={true}
    />
  );
}
