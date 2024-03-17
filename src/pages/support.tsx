import Layout from "@/layout/layout";
import SupportPageText from "@/lib/components/appComponents/support";

function SupportPage() {
  return <Layout 
    childrenDev={<SupportPageText />} 
    childrenCompany={<SupportPageText />} 
  />;
}

export default SupportPage;
