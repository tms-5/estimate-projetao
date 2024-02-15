import Link from "next/link";
import FilterNav from "../../FilterNav";
import Button from "../../button/Button";
import Card from "../../card/Card";
import ProjectCard from "../../card/ProjectCard";
import TaskCard from "../../card/TaskCard";
import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import { useEffect, useState } from "react";
import getAllProjects from "@/services/ProjectServices/getAllProjects";
import getUsersProjects from "@/services/ProjectServices/getUserProjects";

type DataCardType = {
  deadline: number;
  header: string;
  taskTotal: number;
  taskDone: number;
};

export default function ProjectDev() {
    function onSearch(searchTerm: string) {
    console.log(searchTerm);
  }

  const [projects, setProjects] = useState();

  useEffect(() => {
    const handleGetUserProjects = async () => {
      try {
        const response = await getUsersProjects(1);
        
        setProjects(response);
      } catch (error) {
        console.log('error', error);
      }
    };

    handleGetUserProjects();
  }, []);
  
  let headers = [
    { name: "Nome", value: "name" },
    { name: "Data", value: "date" },
    { name: "Status", value: "status" },
  ];

  let data = [
    {
      name: "Criar gráfico de pizza",
      date: "05/10/2024",
      status: "Finalizado",
    },
    {
      name: "Criar formulário",
      date: "05/10/2024",
      status: "Finalizado",
    },
    {
      name: "Criar tabela",
      date: "05/10/2024",
      status: "Finalizado",
    },
  ];

  let cardDataEx: DataCardType[] = [
    {
      deadline: 1,
      header: "Projeto 1",
      taskTotal: 10,
      taskDone: 1
    },
    {
      deadline: 2,
      header: "Projeto 2",
      taskDone: 2,
      taskTotal: 10,
    },
    {
      deadline: 3,
      header: "Projeto 3",
      taskDone: 3,
      taskTotal: 10,
    },
  ]

  return (
    <>
      <PageTitle title="PROJETOS" subTitle="" />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Link href={'/projects/offers'}>
          <button 
            style={{ 
              background: '#0898B5', 
              color: '#FFF', 
              borderRadius: '8px', 
              transition: 'background-color 0.3s ease',
              boxShadow: 'none',
              marginRight: '32px',
            }}
          >
            Visualizar ofertas
          </button>
        </Link>
      </div>

      <p>Em andamento</p>
      <hr style={{marginTop: '-16px', width: '4%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />

      <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
        {cardDataEx.map((card: DataCardType) => (
          <ProjectCard 
            key={Math.random()} 
            deadline={card.deadline} 
            header={card.header} 
            tasksTotal={card.taskTotal} 
            tasksDone={card.taskDone}
          />
        ))}
      </div>

      <div style={{ marginTop: '80px' }}>
        <FilterNav 
          allProjects={<DataTable headers={headers} data={data} />} 
          finishedProjects={<DataTable headers={headers} data={data} />} 
          onGoingProjects={<DataTable headers={headers} data={data} />}
        />
      </div>
    </>       
  );
}
