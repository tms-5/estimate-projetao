import PageTitle from "../../pageTitle/PageTitle";

export default function CreateTask() {
  return (
    <>
      <PageTitle title={"TASK"} subTitle={"Cadastrar task"} />
      <hr />
      <div className="d-flex">
        <div className="w-50 pl-1 pr-1">
          <h4 className="m-0">Informações técnicas</h4>
          <p className="f-07 m-0">
            Descreva qual área, tecnologia e biblioteca você utilizou no
            processo de concepção dessa task.
          </p>
        </div>
        <div className="d-grid w-50 pl-1 pr-1r">
          <div>Senioridade</div>
          <select>
            <option>Junior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </select>
          <div>Tecnologia</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
          <div>Biblioteca</div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="w-50 pl-1 pr-1">
          <h4 className="m-0">Informações da task</h4>
          <p className="f-07 m-0">
            Descreva qual ação e o objetivo específico a ser realizado na task.
          </p>
        </div>
        <div className="d-grid w-50 pl-1 pr-1r">
          <div>Senioridade</div>
          <select>
            <option>Junior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </select>
          <div>Tecnologia</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
          <div>Biblioteca</div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="w-50 pl-1 pr-1">
          <h4 className="m-0">Tempo estimado</h4>
          <p className="f-07 m-0">
            Descreva quanto tempo você levou para desenvolver a task e qual
            tempo você havia estimado. O tempo é informado em horas.
          </p>
        </div>
        <div className="d-grid w-50 pl-1 pr-1r">
          <div>Senioridade</div>
          <select>
            <option>Junior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </select>
          <div>Tecnologia</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
          <div>Biblioteca</div>
        </div>
      </div>{" "}
      <hr />
      <div className="d-flex">
        <div className="w-50 pl-1 pr-1">
          <h4 className="m-0">Informações adicionais</h4>
          <p className="f-07 m-0">
            Ajude outras pessoas descrevendo os problemas que você enfrentou, os
            requisitos que você utilizou, as histórias de usuários e dê
            sugestões de ajuda.
          </p>
        </div>
        <div className="d-grid w-50 pl-1 pr-1r">
          <div>Senioridade</div>
          <select>
            <option>Junior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </select>
          <div>Tecnologia</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
          <div>Biblioteca</div>
        </div>
      </div>
    </>
  );
}
