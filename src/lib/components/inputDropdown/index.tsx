import { useState } from "react"
import InputProjectRegister from "../input/InputProjectRegister";
import Link from "next/link";
import style from './style.module.css'
import { SearchActivityType } from "@/types/projects";
import { PencilIcon, Trash } from "@/lib/assets/icon";
import Image from "next/image";

const InputDropdown = (props: {
    title: string, 
    placeholders: string[], 
    onClick: () => void,
    initialValue?: string,
    buttons?: boolean,
    activity?: boolean,
    foundActivity?: SearchActivityType[],
  }) => {
  const [openBox, setOpenBox] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleOpenBox = () => {
    setOpenBox(!openBox);
    setRotate(!rotate);
  };

  return (
    <div style={{ marginBottom: '40px' }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: '16px' }} >
          {!props.buttons ? 
            <>
              <Image src={Trash} alt={""} />
              <Image src={PencilIcon} alt={""} style={{ marginBottom: '4px', marginRight: '-4px' }}/>
              <p 
                style={{ marginRight: '16px', cursor: 'pointer' }} 
                onClick={handleOpenBox}
                className={`${style.rotate} ${rotate ? style['rotate-180'] : ''}`}
              >         
                <strong>+</strong>
              </p>
            </>
          : 
            <p 
              style={{ marginRight: '16px', cursor: 'pointer' }} 
              onClick={handleOpenBox}
              className={`${style.rotate} ${rotate ? style['rotate-180'] : ''}`}
            >         
              <strong>+</strong>
            </p>
          }
        </div>
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

          {props.activity && props.foundActivity ?
            <>
              <p style={{ color: '#757575' }}>Tarefas semelhantes encontradas: </p>
              {props.foundActivity?.map((value) => (
                <div style={{ marginTop: '16px' }} key={Math.random()}>
                  <div style={{
                    backgroundColor: '#E6E6E6',
                    borderRadius: '10px',
                    padding: '24px',
                    width: '97%'
                  }}>
                    <h3>{value.title}</h3>
                    <p><strong>Descrição: </strong> {value.description}</p>
                    <p><strong>Área: </strong> {value.area} </p>
                    <p><strong>Tecnologia: </strong> {value.tech} </p>
                    <p><strong>Biblioteca: </strong> {value.lib} </p>
                    <p><strong>Senioridade: </strong> {value.seniorLevel} </p>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <button 
                        type="button"
                        style={{ backgroundColor: '#0898B5', color: '#FFF', width: '20%', height: '40px' }}
                      >
                        Selecionar
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <InputProjectRegister 
                key={Math.random()} 
                placeholder={'Descrição'}
                initialValue={props.initialValue}
              />
            </>
          : 
            <div />
          }


          {props.buttons ? 
            <div style={{ marginTop: '16px' }}>
              <button type='button' style={{ marginRight: '16px', color: '#757575' }}>
                <u>Cancelar</u>
              </button>
              <button type='button' style={{ color: '#0898B5' }} onClick={props.onClick}>
                <u>Salvar</u>
              </button>
            </div>
          : 
            <div />
          }
        </div>
      : 
        <div />
      }
  </div>
  )
}

export default InputDropdown;
