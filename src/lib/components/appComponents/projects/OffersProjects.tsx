import ProjectCard from "../../card/ProjectCard";
import PageTitle from "../../pageTitle/PageTitle";

export default function OffersProjects() {
  return (
      <>
        <PageTitle title="OFERTAS" subTitle="" />

        <p>Novas Ofertas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          <ProjectCard header={'proposta 1'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={2} />
          <ProjectCard header={'proposta 2'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={2} />
        </div>

        <p style={{ marginTop: '72px' }}>Ofertas Antigas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          <ProjectCard header={'proposta 3'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={3} />
          <ProjectCard header={'proposta 4'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={4} />
        </div>

        <p style={{ marginTop: '72px' }}>Ofertas Recusadas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px', marginBottom: '80px'}}>
          <ProjectCard header={'proposta 5'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={5} />
          <ProjectCard header={'proposta 6'} deadlineDate="17/10/2024" technology="NextJs" tasksTotal={6} />
        </div>
      </>
    ) 
  }
