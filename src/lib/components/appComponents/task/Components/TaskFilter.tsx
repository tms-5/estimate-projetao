interface FilterProps {
  functionFilter: (key: string, value: string) => void;
}

export const TaskFilter: React.FC<FilterProps> = ({ functionFilter }) => {
  return (
    <>
      <div className="mt-1r" />
      <div className="d-flex mt-1r">
        <div className="d-grid w-50 pr-1">
          <div className="f-07 fw-500">Ação da task:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50 pl-1">
          <div className="f-07 fw-500">Componente de manipulação:</div>
          <select>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>
      <div className="d-flex mt-1r">
        <div className="d-grid w-50 pr-1">
          <div className="f-07 fw-500">Tecnologia:</div>
          <select onChange={(e) => functionFilter("tecnology", e.target.value)}>
            <option value={""}>Todos</option>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
        <div className="d-grid w-50 pl-1">
          <div className="f-07 fw-500">Biblioteca:</div>
          <select onChange={(e) => functionFilter("library", e.target.value)}>
            <option value={""}>Todos</option>
            <option>React</option>
            <option>Svelte</option>
            <option>Vue.js</option>
          </select>
        </div>
      </div>
    </>
  );
};
