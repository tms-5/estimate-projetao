interface FilterProps {
  functionFilter: (key: string, value: string) => void;
}

export const TaskFilter: React.FC<FilterProps> = ({ functionFilter }) => {
  return (
    <>
      <button onClick={() => functionFilter("teste", "teste")}>aa</button>
      <div className="mt-1r" />
      <div className="d-flex mt-1r">
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Ação da task:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Componente de manipulação:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>
      <div className="d-flex mt-1r">
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Tecnologia:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500">Biblioteca:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>
    </>
  );
};
