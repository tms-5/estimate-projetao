import { useState } from 'react';
import InputProjectRegister from '../input/InputProjectRegister';

type InputProps = {
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  name?: string;
};

function ExpandingInputComponent(props: InputProps, { onInputChange }: any) {
  const [expanded, setExpanded] = useState(false);
  const [input1, setInput1] = useState<any>({
    "Nome": "",
    "Descricao": "",
  });

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (value: string, field: string) => {
    setInput1({...input1, [field]: value});
    onInputChange({...input1, [field]: value});
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: '70%',
          padding: '16px',
          backgroundColor: '#EBF3FF',
          borderRadius: '8px',
          borderLeft: '8px solid #3687FF',
          height: '4px',
          cursor: 'pointer',
          marginBottom: '8px'
        }}

        onClick={handleToggleExpand}
      >
        <p>{props.name}</p>
        <strong>+</strong>
      </div>
      {expanded && (
        <div style={{ marginLeft: '24px', display: "flex", flexDirection: 'column', width: '70%' }}>
          <InputProjectRegister type="text" value={input1["Nome"]} onChange={(e) => handleInputChange(e.target.value, "Nome")} placeholder="Nome" />
          <InputProjectRegister type="text" value={input1["Descricao"]} onChange={(e) => handleInputChange(e.target.value, "Descricao")} placeholder="Descrição" />
          <div style={{ marginTop: "4px" }}>
            <button type='button' style={{ marginRight: '16px', color: '#757575' }}>
              <u>Cancelar</u>
            </button>
            <button type='button' style={{ color: '#0898B5' }} onClick={props.onClick}>
              <u>Salvar</u>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpandingInputComponent;
