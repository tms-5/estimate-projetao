import ProjectCard from "../../card/ProjectCard";
import PageTitle from "../../pageTitle/PageTitle";

export default function OffersProjects() {
  return (
      <>
        <PageTitle title="OFERTAS" subTitle="" />

        <p>Novas Ofertas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          <ProjectCard tasksDone={0} tasksTotal={0} />
          <ProjectCard tasksDone={0} tasksTotal={0} />
        </div>

        <p>Ofertas Antigas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          <ProjectCard tasksDone={0} tasksTotal={0} />
          <ProjectCard tasksDone={0} tasksTotal={0} />
        </div>

        <p>Ofertas Recusadas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          <ProjectCard tasksDone={0} tasksTotal={0} />
          <ProjectCard tasksDone={0} tasksTotal={0} />
        </div>
      </>
    ) 
  }
