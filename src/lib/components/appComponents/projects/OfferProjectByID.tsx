import useStore from "@/context/ProjectsContext";
import PageTitle from "../../pageTitle/PageTitle";

export default function OfferProjectByID() {
  const offerData = useStore();

  return (
    <>
      <PageTitle title="PROJETOS" subTitle={""} />
      <h2>#{offerData.header}</h2>
      <div style={{ display: 'flex', gap: '40px', marginBottom: '24px' }}>
        <p> <strong>Status: </strong> {offerData.status} </p>
        <p> <strong>Deadline: </strong> {offerData.deadlineDate} </p>
      </div>

      <hr style={{ marginBottom: '48px' }}/>

      <PageTitle title="INFORMAÇÕES TÉCNICAS" subTitle={""} />
      <div style={{ marginBottom: '48px' }}>
        <p> <strong> Senioridade: </strong> ??? </p>
        <p> <strong>Tecnologia: </strong> {offerData.technology} </p>
        <p> <strong> Biblioteca: </strong> ??? </p>
      </div>

      <PageTitle title="INFORMAÇÕES DO PROJETO" subTitle={""} />
      <div style={{ marginBottom: '48px' }}>
        <p> <strong>Quantidade de componentes: </strong> ??? </p>
        <p> <strong>Tasks para mensurar: </strong> {offerData.taskTotal} </p>
        <p> <strong>Tempo de espera permitido: </strong> ??? </p>
        <p> <strong>Grau de risco do projeto: </strong> ??? </p>
        <p> <strong> Valor: </strong> R$ ???,00 </p>
      </div>

      <div style={{ marginBottom: '48px', display: 'flex', gap: '24px' }}>
        <button style={{ border: '1px solid #757575', borderRadius: '8px', width: '16%', fontSize: '16px' }} type="button">Recusar</button>
        <button style={{ borderRadius: '8px', backgroundColor: '#0898B5', color: '#FFF', width: '16%', fontSize: '16px' }} type="button">Aceitar</button>
      </div>
    </>
  );
}
