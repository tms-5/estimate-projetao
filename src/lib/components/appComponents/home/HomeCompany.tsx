import { useAuth } from "@/context/AuthContext";
import PageTitle from "../../pageTitle/PageTitle";
import { returnDateAndTime } from "./controller";
import ProjectCompany from "../projects/ProjectCompany";

export default function HomeCompany() {
  const { user } = useAuth();
  return (
    <>
      <div className="w-max-100">
        <PageTitle
          title={returnDateAndTime()}
          subTitle={`Bem-vindo de volta, ${
            user && user.name && user.name.split(" ")[0]
          }!`}
        />
        <ProjectCompany />
      </div>
    </>
  );
}
