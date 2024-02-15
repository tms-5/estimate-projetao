import Layout from "@/layout/layout";
import TaskContributions from "@/lib/components/appComponents/task/TaskContributions";

export default function Contributions() {
  return (
    <Layout
      backto="Voltar para Tasks"
      backToRoute="/tasks"
      childrenDev={<TaskContributions />}
      devHasntAccess={false}
      companyHasntAccess={true}
      childrenCompany={<></>}
    />
  );
}
