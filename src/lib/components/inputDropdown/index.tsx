import { useState } from "react"
import InputProjectRegister from "../input/InputProjectRegister";
import Link from "next/link";
import style from './style.module.css'

const InputDropdown = (props: {
    title: string, 
    placeholders: string[], 
    onClick: () => void,
    initialValue?: string,
    buttons?: boolean, 
  }) => {
  const [openBox, setOpenBox] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleOpenBox = () => {
    setOpenBox(!openBox);
    setRotate(!rotate);
  };

  return (
    <div>
      <div 
        style={{ 
          display: "flex" , 
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
        onClick={handleOpenBox}
      >
        <p>{props.title}</p>
        <p 
          style={{ marginRight: '16px', cursor: 'pointer' }} 
          onClick={handleOpenBox}
          className={`${style.rotate} ${rotate ? style['rotate-180'] : ''}`} /* Adiciona a classe 'rotate-180' se isRotated for verdadeiro */
        > 
          <strong>+</strong>
        </p>
      </div>
      {openBox ? 
        <div 
          style={{ marginLeft: '24px', display: "flex", flexDirection: 'column', width: '70%' }}
        >
          {props.placeholders.map((placeholder: string) => (
            <InputProjectRegister 
              key={Math.random()} 
              placeholder={placeholder}
              initialValue={props.initialValue}
            />
          ))}
          <div style={{ marginTop: '16px' }}>
            <button type='button' style={{ marginRight: '16px', color: '#757575' }}>
              <u>Cancelar</u>
            </button>
            <button type='button' style={{ color: '#0898B5' }} onClick={props.onClick}>
              <u>Salvar</u>
            </button>
          </div>
        </div>
      : 
        <div />
      }
  </div>
  )
}

export default InputDropdown;
