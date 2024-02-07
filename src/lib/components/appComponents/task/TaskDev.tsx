import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import { TaskFilter } from "./Components/TaskFilter";

export default function TaskDev() {
  function onSearch(searchTerm: string) {
    console.log(searchTerm);
  }
  let headers = [
    { name: "Nome", value: "name" },
    { name: "Tecnologia", value: "tecnology" },
    { name: "Biblioteca", value: "library" },
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
      <PageTitle title="TASKS" subTitle="" />
      <div className="mt-1r" />

      <DataTable
        headers={headers}
        data={data}
        hasFilters={true}
        FilterComponent={TaskFilter}
      />
    </>
  );
}
