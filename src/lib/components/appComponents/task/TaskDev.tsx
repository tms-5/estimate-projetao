import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import SearchInput from "../../search/Search";

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
      <div className="d-flex mt-1r">
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Ação da task:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Componente de manipulação:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>
      <div className="d-flex mt-1r">
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Tecnologia:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Biblioteca:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>

      <DataTable headers={headers} data={data} />
    </>
  );
}
