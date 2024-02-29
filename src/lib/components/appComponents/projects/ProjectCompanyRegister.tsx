import Link from "next/link";
import PageTitle from "../../pageTitle/PageTitle";
import Input from "../../input/Input";
import * as React from "react";
import ChipsArray from "@/lib/components/selection/SelectionChips";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputProjectRegister from "../../input/InputProjectRegister";
import InputDropdown from "../../inputDropdown";
import { LinkOffTwoTone } from "@mui/icons-material";
import Select from "../../select/Select";

export default function ProjectCompanyRegister() {
  const [openBox, setOpenBox] = React.useState(false);
  const [componentList, setComponentList] = React.useState<string[]>([]);
  const [activityList, setActivityList] = React.useState<string[]>([]);

  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  const handleClick = (clickType: string) => {
    if (clickType === "component") {
      setComponentList((prevValue: string[]) => [...prevValue, "new value"]);
    }

    if (clickType === "activity") {
      setActivityList((prevValue: string[]) => [...prevValue, "new value"]);
    }
  };

  console.log("componentList", componentList);

  return (
    <>
      <PageTitle title="PROJETO" subTitle="" />
      <h2>Cadastrar Projeto</h2>
      <hr style={{ marginTop: "24px", marginBottom: "24px" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "24px",
          gap: "4%",
        }}
      >
        <div style={{ width: "64%" }}>
          <h3>Infomações Técnicas</h3>
          <p style={{ color: "#757575" }}>
            {" "}
            Descreva qual área, tecnologia e biblioteca você utilizou no
            processo de concepção desse projeto.{" "}
          </p>
        </div>

        <div
          style={{
            marginTop: "24px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputProjectRegister name="Nome" />
          <p style={{ marginBottom: "4px", width: "100%" }}>Senioridade</p>
          <Select
            class="b-none mt-1r w-web font-nunito p-2 drop-shadow" 
            options={[
              { value: "Júnior", key: "Jr" },
              { value: "Pleno", key: "Pl" },
              { value: "Senior", key: "Sr" },
            ]}
            onChange={() => {}}
          />

          <InputProjectRegister name="Área" />
          <InputProjectRegister name="Tecnologia" />
          <p style={{ marginBottom: "4px", width: "100%" }}>Bibliotecas</p>
          <div style={{ width: "80%" }}>
            <ChipsArray onChangeValues={() => console.log()} />
          </div>
        </div>
      </div>

      <hr style={{ marginTop: "48px", marginBottom: "48px" }} />

      <h3>Estrutura do Projeto</h3>
      <p style={{ color: "#757575", marginTop: "-16px", marginBottom: "32px" }}>
        Adicionar componentes e Atividades detalhadas
      </p>

      {componentList.length === 0 ? (
        <InputDropdown
          title={"Adicionar Componente"}
          placeholders={["Nome do componente", "Descrição"]}
          onClick={() => handleClick("component")}
          buttons={true}
        />
      ) : (
        <>
          <InputDropdown
            title={"Adicionar Componente"}
            placeholders={["Nome do componente", "Descrição"]}
            onClick={() => handleClick("component")}
            buttons={true}
          />
          {componentList.map((value) => (
            <InputDropdown
              key={Math.random()}
              title={"Adicionar Componente"}
              placeholders={["Nome do componente", "Descrição"]}
              onClick={() => handleClick("component")}
            />
          ))}
        </>
      )}

      {activityList.length === 0 ? (
        <InputDropdown
          title={"Adicionar Atividades"}
          placeholders={["Digite o nome da atividade que deseja adicionar"]}
          onClick={() => handleClick("activity")}
          buttons={true}
          activity={true}
        />
      ) : (
        <>
          <InputDropdown
            title={"Adicionar Atividades"}
            placeholders={["Digite o nome da atividade que deseja adicionar"]}
            onClick={() => handleClick("activity")}
            buttons={true}
          />
          {componentList.map((value) => (
            <InputDropdown
              key={Math.random()}
              title={"Adicionar Atividades"}
              placeholders={["Digite o nome da atividade que deseja adicionar"]}
              onClick={() => handleClick("activity")}
            />
          ))}
        </>
      )}

      <div style={{ marginTop: "88px", marginBottom: "100px" }}>
        <Link href={""} style={{ color: "#0898B5" }}>
          <u>Task não encontrada?</u>
        </Link>
        <p style={{ color: "#0898B5", marginTop: "8px" }}>
          Entre em contato com especialistas para obter uma estimativa
          personalizada.
        </p>
      </div>
    </>
  );
}
