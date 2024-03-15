import Layout from '@/layout/layout';
import FindAnalysts from '@/lib/components/appComponents/analyst/FindAnalysts';

export default function Analysts() {
  return <Layout childrenDev={<></>} childrenCompany={<FindAnalysts />} />;
}
