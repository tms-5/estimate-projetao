import Layout from "@/layout/layout";
import CreateTask from "@/lib/components/appComponents/task/CreateTask";

export default function NewTask() {
  return (
    <Layout
      backto="Voltar para Tasks"
      backToRoute="/tasks"
      childrenDev={<CreateTask />}
      companyHasntAccess={true}
      childrenCompany={<></>}
    />
  );
}
