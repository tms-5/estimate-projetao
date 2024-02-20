import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";

export default function TaskContributions() {
  let headers = [
    { value: "Nome", key: "name" },
    { value: "Tecnologia", key: "tecnology" },
    { value: "Biblioteca", key: "library" },
  ];

  let data = [
    {
      name: "Criar gráfico de pizza",
      tecnology: ["ReactJs", "VueJs", "SvelteJs"],
      library: ["D3-Scale", "D3"],
    },
    {
      name: "Criar formulário",
      tecnology: ["ReactJs"],
      library: ["React forms", "Svelte forms"],
    },
    {
      name: "Criar tabela",
      tecnology: ["ReactJs", "SvelteJs"],
      library: ["Svelte Components"],
    },
  ];

  return (
    <>
      <PageTitle title="TASK" subTitle="Contribuições" />
      <DataTable headers={headers} data={data} hasFilters={false} />
    </>
  );
}
