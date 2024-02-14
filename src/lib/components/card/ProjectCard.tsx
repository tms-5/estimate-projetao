import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProjectCard(props: {
  header?: React.ReactNode;
  tasksDone?: number;
  tasksTotal?: number;
  deadline?: number;
  class?: string;
  deadlineDate?: string;
  technology?: string;
  linkToOffer?: () => void;
}) {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (props.tasksTotal && props.tasksDone) {
      // const percentageDone = ((props.tasksDone / props.tasksTotal) * 100);
      const percentageDone = (num1: number, num2: number) => {
        const division = (num1 / num2) * 100;
  
        setPercentage(division);
      }

      percentageDone(props.tasksDone, props.tasksTotal);
    }
  }, []);

  return (
    <div className={props.class ?? "card-default"} style={{ width: '32%', borderTop: '16px solid #1C2664' }} onClick={props.linkToOffer}>
      <h3 style={{ marginLeft: '16px' }}>#{props.header}</h3>
      {props.deadline ? (
          <>
            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575'}}>{props.tasksDone}/{props.tasksTotal} finalizados</p>
            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575'}}>{props.deadline} dias restantes</p>
            <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: '-16px'}}>
              <p style={{ fontSize: '16px', color: '#000', marginRight: '16px'}}>{percentage}%</p>
            </div>
          </>
        )
      : (
          <div style={{ cursor: 'pointer' }}>
            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575', marginBottom: '-10px' }}>
              <strong>Deadline: </strong> {props.deadlineDate}
            </p>
            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575', marginBottom: '-10px' }}> 
              <strong>Tecnoogia: </strong> {props.technology}
            </p>
            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#757575' }}> 
              <strong>Tasks: </strong> {props.tasksTotal}
            </p>
          </div>
        )
      }
    </div>
  );
}
