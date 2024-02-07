export default function ProjectCard(props: {
  header?: React.ReactNode;
  tasksDone: number;
  tasksTotal: number;
  deadline?: number;
  footer?: React.ReactNode;
  class?: string;
}) {

  const percentageDone = ((props.tasksDone / props.tasksTotal) * 100);

  return (
    <div className={props.class ?? "card-default"} style={{ width: '32%', borderTop: '16px solid #1C2664' }}>
      <h3 style={{ marginLeft: '16px' }}>#{props.header}</h3>
      <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575'}}>{props.tasksDone}/{props.tasksTotal} finalizados</p>
      <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575'}}>{props.deadline} dias restantes</p>
      <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: '-16px'}}>
        <p style={{ fontSize: '16px', color: '#000', marginRight: '16px'}}>{percentageDone}%</p>
      </div>
      {props.footer}
    </div>
  );
}
