import { useRouter } from "next/router";
import ProjectCard from "../../card/ProjectCard";
import PageTitle from "../../pageTitle/PageTitle";
import { useEffect, useState } from "react";
import getUsersProjects from "@/services/ProjectServices/getUserProjects";
import getTasksProject from "@/services/TaskServices/getTasksFromProjects";
import useStore from "@/context/ProjectsContext";

export type OfferDataType = {
  id: number;
  header: string;
  deadlineDate: string;
  technology: string;
  taskTotal: number;
  status?: string;
};

export default function OffersProjects() {
  const router = useRouter();

  const [newOffers, setNewOffers] = useState<OfferDataType[]>([]);
  const [oldOffers, setOldOffers] = useState<OfferDataType[]>([]);
  const [deniedOffers, setDeniedOffers] = useState<OfferDataType[]>([]);
  const [status, setStatus] = useState('');

  const contextTest = useStore((state) => state.updateOfferState)

  const todayDate: any = new Date();

  // mudar isso aqui para pegar do login do usuario
  const userId = 1;

  const verifyStatus = (total: number, done: number) => {
    if ((done / total) === 1) {
      return 'Finalizado';
    } else {
      return 'Em andamento';
    }
  };

  useEffect(() => {
    const handleGetProjectsByUser = async () => {
      try {
        const userProjects = await getUsersProjects(userId);
        const devProjects = await getUsersProjects(3);
        const devProjectsList = devProjects.map((object: {
          project: any; id: any; 
        }) => object.project.id);
        
        userProjects.map(async (project: any) => {
          if (devProjectsList.includes(project.project.id) === false) {
            const taskResponse = await getTasksProject(project.project.id);
  
            const predictedConclusionDate = project.project.date_predicted_conclusion;
            const deadline = predictedConclusionDate.split('T')[0].split('-');
            const formattedDate = `${deadline[2]}/${deadline[1]}/${deadline[0]}`;
            
            const deadlineData: any = new Date(predictedConclusionDate.split('T')[0]);
            const differenceInMilliseconds = Math.abs(deadlineData - todayDate);
            const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
            if (differenceInDays <= 10 && newOffers.length < userProjects.length) {
              setNewOffers((prevValues: any) => ([
                ...prevValues,
                {
                  id: project.project.id,
                  header: project.project.name,
                  deadlineDate: formattedDate,
                  taskTotal: taskResponse.length,
                  technology: project.project.stack,
                  status: verifyStatus(taskResponse.length, 0),
                }
              ]));
            }
  
            if (differenceInDays > 10 && oldOffers.length < userProjects.length) {
              setOldOffers((prevValues: any) => ([
                ...prevValues,
                {
                  id: project.project.id,
                  header: project.project.name,
                  deadlineDate: formattedDate,
                  taskTotal: taskResponse.length,
                  technology: project.project.stack,
                  status: verifyStatus(taskResponse.length, 0),
                }
              ]));
            }
  
            if (differenceInDays > 100 && deniedOffers.length < userProjects.length) {
              setDeniedOffers((prevValues: any) => ([
                ...prevValues,
                {
                  id: project.project.id,
                  header: project.project.name,
                  deadlineDate: formattedDate,
                  taskTotal: taskResponse.length,
                  technology: project.project.stack,
                  status: verifyStatus(taskResponse.length, 0),
                }
              ]));
            }
          }
        });
      } catch (error) {
        console.log(error);
      };
    };

    handleGetProjectsByUser();
  }, []);

  const handleNavigation = (offerId: number, offer?: any) => {
    router.push(`/projects/offers/${offerId}`);

    if (offer) {
      contextTest(offer);
    }
  };

  return (
      <>
        <PageTitle title="OFERTAS" subTitle="" />

        <p>Novas Ofertas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        {newOffers.length ? 
          <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
            {newOffers.map((offer: OfferDataType) => (
              <ProjectCard 
                key={Math.random()} 
                header={offer.header} 
                deadlineDate={offer.deadlineDate} 
                technology={offer.technology} 
                tasksTotal={offer.taskTotal}
                onClick={() => handleNavigation(offer.id, offer)} 
              />
            ))}
          </div>
        : 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p> Não há novas ofertas </p>
          </div>
        }

        <p style={{ marginTop: '72px' }}>Ofertas Antigas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        {oldOffers.length ? 
          <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
            {oldOffers.map((offer: OfferDataType) => (
              <ProjectCard 
                key={Math.random()} 
                header={offer.header} 
                deadlineDate={offer.deadlineDate} 
                technology={offer.technology} 
                tasksTotal={offer.taskTotal}
                onClick={() => handleNavigation(offer.id)}
              />
            ))}
          </div>        
        : 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p> Não há ofertas antigas </p>
          </div>
        }

        <p style={{ marginTop: '72px' }}>Ofertas Recusadas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        {deniedOffers.length ? 
          <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px', marginBottom: '80px'}}>
            {deniedOffers.map((offer: OfferDataType) => (
              <ProjectCard 
                key={Math.random()} 
                header={offer.header} 
                deadlineDate={offer.deadlineDate} 
                technology={offer.technology} 
                tasksTotal={offer.taskTotal}
                onClick={() => handleNavigation(offer.id)}
              />
            ))}
          </div>
        : 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p> Não há ofertas recusadas </p>
          </div>
        }
      </>
    ) 
  }
