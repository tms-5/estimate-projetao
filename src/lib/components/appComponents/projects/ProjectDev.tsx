import FilterNav from "../../FilterNav";
import Button from "../../button/Button";
import Card from "../../card/Card";
import ProjectCard from "../../card/ProjectCard";
import TaskCard from "../../card/TaskCard";
import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";

export default function ProjectDev() {
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
      <PageTitle title="PROJETOS" subTitle="" />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button 
          style={{ 
            background: '#0898B5', 
            color: '#FFF', 
            borderRadius: '8px', 
            transition: 'background-color 0.3s ease',
            boxShadow: 'none',
          }}
        >
          Visualizar ofertas
        </button>
      </div>

      <p>Em andamento</p>
      <hr style={{marginTop: '-16px', width: '4%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />

      <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
        <ProjectCard deadline={7} header={'undefined'} tasksTotal={10} tasksDone={5}/>
        <ProjectCard deadline={7} header={'undefined'} tasksTotal={10} tasksDone={5}/>
        <ProjectCard deadline={7} header={'undefined'} tasksTotal={10} tasksDone={5}/>
        <ProjectCard deadline={7} header={'undefined'} tasksTotal={10} tasksDone={5}/>
      </div>

      <div style={{ marginTop: '40px' }}>
        <FilterNav 
          allProjects={<DataTable headers={headers} data={data} />} 
          finishedProjects={<DataTable headers={headers} data={data} />} 
          onGoingProjects={<DataTable headers={headers} data={data} />}
        />
      </div>
    </>       
  );
}
