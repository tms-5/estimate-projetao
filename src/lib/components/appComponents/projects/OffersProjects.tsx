import ProjectCard from "../../card/ProjectCard";
import PageTitle from "../../pageTitle/PageTitle";

type OfferDataType = {
  header: string;
  deadlineDate: string;
  technology: string;
  taskTotal: number;
};

export default function OffersProjects() {
  let dataNewOffers: OfferDataType[] = [
    {
      header: 'proposta nova 1',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
    {
      header: 'proposta nova 2',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
    {
      header: 'proposta nova 3',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
  ];

  let dataOldOffers: OfferDataType[] = [
    {
      header: 'proposta velha 1',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
    {
      header: 'proposta velha 2',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
    {
      header: 'proposta velha 3',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
  ];

  let dataDeniedOffers: OfferDataType[] = [
    {
      header: 'proposta recusada 1',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
    {
      header: 'proposta recusada 2',
      deadlineDate: '17/10/2024',
      technology: 'NextJs',
      taskTotal: 2,
    },
  ];

  return (
      <>
        <PageTitle title="OFERTAS" subTitle="" />

        <p>Novas Ofertas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          {dataNewOffers.map((offer: OfferDataType) => (
            <ProjectCard header={offer.header} deadlineDate={offer.deadlineDate} technology={offer.technology} tasksTotal={offer.taskTotal} />
          ))}
        </div>

        <p style={{ marginTop: '72px' }}>Ofertas Antigas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px'}}>
          {dataOldOffers.map((offer: OfferDataType) => (
            <ProjectCard header={offer.header} deadlineDate={offer.deadlineDate} technology={offer.technology} tasksTotal={offer.taskTotal} />
          ))}
        </div>

        <p style={{ marginTop: '72px' }}>Ofertas Recusadas</p>
        <hr style={{marginTop: '-16px', width: '8%', marginLeft: '8px', borderColor: '#1A3B7C', marginBottom: '24px'}} />
        <div style={{ display: 'flex', flexWrap: 'wrap',  gap: '16px', marginBottom: '80px'}}>
          {dataDeniedOffers.map((offer: OfferDataType) => (
            <ProjectCard header={offer.header} deadlineDate={offer.deadlineDate} technology={offer.technology} tasksTotal={offer.taskTotal} />
          ))}
        </div>
      </>
    ) 
  }
