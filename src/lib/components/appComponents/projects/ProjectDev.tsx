import Link from "next/link";
import FilterNav from "../../FilterNav";
import ProjectCard from "../../card/ProjectCard";
import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import { useEffect, useState } from "react";
import getUsersProjects from "@/services/ProjectServices/getUserProjects";
import getTasksProject from "@/services/TaskServices/getTasksFromProjects";

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
  const [tasks, setTasks] = useState<any[]>([]);
  const [cardsData, setCardsData] = useState<DataCardType[]>([]);
  const [allProjects, setAllProjects] = useState<any[]>([]);

  const todayDate: any = new Date();

  useEffect(() => {
    const handleGetUserProjects = async () => {
      try {
        const response = await getUsersProjects(3);
        setProjects(response);

        response.map(async (res: any) => {
          const taskResponse = await getTasksProject(res.id);

          if (tasks.length === 0) {
            setTasks(taskResponse);
          }

          if (tasks.length !== 0) {
            setTasks((prevValues: any) => ([{
              ...prevValues,
              taskResponse
            }]));
          }

          const deadlineDate: any = new Date(res.project.date_predicted_conclusion);
          const differenceInMilliseconds = Math.abs(deadlineDate - todayDate);
          const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

          const taskTotal = taskResponse.length;
          const taskDone = 1;

          const projectConclusionDate = new Date(res.project.date_predicted_conclusion);
          const day = projectConclusionDate.getDate();
          const month = projectConclusionDate.getMonth();
          const year = projectConclusionDate.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          if (cardsData.length < response.length) {
            setCardsData((prevValues: any) => ([
              ...prevValues, {
              deadline: differenceInDays,
              header: res.project.name,
              taskTotal: taskResponse.length,
              taskDone: taskDone,
              }
            ]));

            if (taskDone / taskTotal === 1) {
              setAllProjects((prevValues: any) => ([
                ...prevValues, {
                  name: res.project.name,
                  date: formattedDate,
                  status: 'Finalizado',
                }
              ]));
            } else {
              setAllProjects((prevValues: any) => ([
                ...prevValues, {
                  name: res.project.name,
                  date: formattedDate,
                  status: 'Em andamento',
                }
              ]));
            }
          }
        });

      } catch (error) {
        console.log('error', error);
      }
    };

    handleGetUserProjects();
  }, []);

  const onGoingProjects = allProjects.filter(project => project.status === 'Em andamento');
  const finishedProjects = allProjects.filter(project => project.status === 'Finalizado');

  let headers = [
    { value: "Nome", key: "name" },
    { value: "Data", key: "date" },
    { value: "Status", key: "status" },
  ];

  return (
    <>
      <PageTitle title="PROJETOS" subTitle="" />

      {cardsData.length ? 
        <>
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
            {cardsData.map((card: DataCardType) => (
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
              allProjects={<DataTable headers={headers} data={allProjects} />} 
              finishedProjects={<DataTable headers={headers} data={finishedProjects} />} 
              onGoingProjects={<DataTable headers={headers} data={onGoingProjects} />}
            />
          </div>
        </>
        : 
        <>
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <p>Nenhum projeto cadastraso</p>
          </div>

        </>
      }
    </>       
  );
}
