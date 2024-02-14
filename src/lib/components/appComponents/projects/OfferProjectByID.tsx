import PageTitle from "../../pageTitle/PageTitle";

export default function OfferProjectByID() {
  return (
    <>
      <PageTitle title="PROJETOS" subTitle={""} />
      <h2>#Projeto 666</h2>
      <div style={{ display: 'flex', gap: '40px', marginBottom: '24px' }}>
        <p> <strong>Status: </strong> Em andamento </p>
        <p> <strong>Deadline: </strong> 17/10/2024 </p>
      </div>

      <hr style={{ marginBottom: '48px' }}/>

      <PageTitle title="INFORMAÇÕES TÉCNICAS" subTitle={""} />
      <div style={{ marginBottom: '48px' }}>
        <p> <strong> Senioridade: </strong> AKSJDHAJSD </p>
        <p> <strong>Tecnologia: </strong> AKSJDHAJSD </p>
        <p> <strong> Biblioteca: </strong> AKSJDHAJSD </p>
      </div>

      <PageTitle title="INFORMAÇÕES DO PROJETO" subTitle={""} />
      <div style={{ marginBottom: '48px' }}>
        <p> <strong>Quantidade de componentes: </strong> 3453</p>
        <p> <strong>Tasks para mensurar: </strong> 333 </p>
        <p> <strong>Tempo de espera permitido: </strong> 333 </p>
        <p> <strong>Grau de risco do projeto: </strong> 333 </p>
        <p> <strong> Valor: </strong> R$ 333,00 </p>
      </div>

      <div style={{ marginBottom: '48px', display: 'flex', gap: '24px' }}>
        <button style={{ border: '1px solid #757575', borderRadius: '8px', width: '16%', fontSize: '16px' }} type="button">Recusar</button>
        <button style={{ borderRadius: '8px', backgroundColor: '#0898B5', color: '#FFF', width: '16%', fontSize: '16px' }} type="button">Aceitar</button>
      </div>
    </>
  );
}
