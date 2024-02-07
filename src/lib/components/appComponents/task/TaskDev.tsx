import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import { TaskFilter } from "./Components/TaskFilter";

export default function TaskDev() {
  function onSearch(searchTerm: string) {
    console.log(searchTerm);
  }
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
      <PageTitle title="TASKS" subTitle="" />
      <div className="mt-1r" />

      <DataTable
        headers={headers}
        data={data}
        hasFilters={true}
        hiddenFilters={false}
        FilterComponent={TaskFilter}
      />
    </>
  );
}
