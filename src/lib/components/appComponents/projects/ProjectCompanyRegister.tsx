import Link from "next/link";
import PageTitle from "../../pageTitle/PageTitle";
import Input from "../../input/Input";

export default function ProjectCompanyRegister() {
    return (
      <>
        <PageTitle title="PROJETO" subTitle="" />
        <h2>Cadastrar Projeto</h2>
        <hr style={{ marginTop: '24px', marginBottom: '24px' }} />

        <div 
          style={{ 
            display: 'flex', 
            justifyContent: "center",
            alignItems: "flex-start", 
            marginTop: '24px', 
            gap: '4%' 
          }}
        >
          <div style={{ width: '64%' }}>
            <h3>Infomações Técnicas</h3>
            <p style={{ color: '#757575' }}> Descreva qual área, tecnologia e biblioteca você utilizou no processo de concepção desse projeto. </p>
          </div>

          <div style={{ marginTop: '24px', width: '100%' }}>
            <Input type={"text"} placeholder="Nome" name="oi" />
            <input type="text" name="Nome" id="" placeholder="Nome" />
            <input type="text" name="Senioridade" id="" placeholder="Senioridade" />
            <input type="text" name="Área" id="" placeholder="Área" />
            <input type="text" name="Tecnologia" id="" placeholder="Tecnologia" />
            <input type="text" name="Bibliotecas" id="" placeholder="Bibliotecas" />
          </div>
        </div>

        <hr />

        <h3>Estrutura do Projeto</h3>
        <p>Adicionar componentes e Atividades detalhadas</p>
        
        <div>
          <p>Adicione um novo componente +</p>
          <input type="text" name="Nome do componente" placeholder="Nome do componente" id="" />
          <input type="text" name="Descrição" placeholder="Descrição" id="" />
          <Link href={""}>
            Cancelar
          </Link>
          <Link href={""}>
            Salvar
          </Link>
        </div>

        <div>
          <div>
            <p>Adicione uma nova atividade LIXO LAPIS</p>
            <p>Cadastrar tarefa</p>
          </div>
          <input type="text" name="Digite o nome da tarefa LUPA" placeholder="Digite o nome da tarefa LUPA" id="" />
          <div>
            <p>Tarefas semelhantes encontradas: </p>
            <div>
              <h3>TITULO DA ATIVIDADE</h3>
              <p><strong>Descrição: </strong> DESCRIÇÃO DA ATIVIDADE</p>
              <p><strong>Área: </strong> ÁREA DA ATIVIDADE</p>
              <p><strong>Tecnologia: </strong> ÁREA DA ATIVIDADE</p>
              <p><strong>Biblioteca: </strong> ÁREA DA ATIVIDADE</p>
              <p><strong>Senioridade: </strong> ÁREA DA ATIVIDADE</p>
              <div>
                <button type="button">Selecionar</button>
              </div>
            </div>
          </div>
          <input type="text" name="Descrição" placeholder="Descrição" />

          <p>Task não encontrada?</p>
          <p>Entre em contato com especialistas para obter uma estimativa personalizada.</p>
        </div>
      </>
    )
  }
  