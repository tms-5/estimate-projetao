import Link from "next/link";
import PageTitle from "../../pageTitle/PageTitle";
import Input from "../../input/Input";
import * as React from 'react';
import ChipsArray from '@/lib/components/selection/SelectionChips';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputProjectRegister from "../../input/InputProjectRegister";
import InputDropdown from "../../inputDropdown";
import { LinkOffTwoTone } from "@mui/icons-material";

export default function ProjectCompanyRegister() {
  const [openBox, setOpenBox] = React.useState(false);
  const [componentList, setComponentList] = React.useState<any[]>([]);
  const [activityList, setActivityList] = React.useState<any[]>([]);
  const [registerProject, setRegisterProject] = React.useState({
    nome: '',
    senioridade: '',
    area: '',
    tecnologia: '',
    bibliotecas: [],
  });
  const [componentObj, setComponentObj] = React.useState({
    nome: '',
    descricao: '',
  });
  const [actObj, setActObj] = React.useState({
    nome: '',
    descricao: '',
  });
  
  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  const handleClick = (clickType: string, name?: string, description?: string) => {
    if (clickType === 'component') {
      setComponentList((prevValue: string[]) => [...prevValue, {
        nome: name,
        descricao: description,
      }]);
    }

    if (clickType === 'activity') {
      setActivityList((prevValue: string[]) => [...prevValue, {
        nome: name,
        descricao: description,
      }]);
    }
  };

  const handleChange = (value: any, field: any) => {
    setRegisterProject({
      ...registerProject,
      [field]: value,
    });
  };

  const handleChangeDropdown = (value: any, field: any, type: boolean) => {
    if (type) {
      setActObj({
        ...actObj,
        [field]: value,
      });
    } else {
      setComponentObj({
        ...componentObj,
        [field]: value,
      });
    }
  };

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
            gap: '4%',
          }}
        >
          <div style={{ width: '64%' }}>
            <h3>Infomações Técnicas</h3>
            <p style={{ color: '#757575' }}> Descreva qual área, tecnologia e biblioteca você utilizou no processo de concepção desse projeto. </p>
          </div>

          <div style={{ marginTop: '24px', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <InputProjectRegister name="Nome" onChange={(value: any) => handleChange(value.target.value, 'nome')}/>
            <InputProjectRegister name="Senioridade" onChange={(value: any) => handleChange(value.target.value, 'senioridade')}/>
            <InputProjectRegister name="Área" onChange={(value: any) => handleChange(value.target.value, 'area')}/>
            <InputProjectRegister name="Tecnologia" onChange={(value: any) => handleChange(value.target.value, 'tecnologia')}/>
            <p style={{ marginBottom: '4px', width: '100%'}}>Bibliotecas</p>
            <div style={{ width: '80%' }}>
              <ChipsArray onChangeValues={(value: any) => handleChange(value, 'bibliotecas')} />
            </div>
          </div>
        </div>

        <hr style={{ marginTop: '48px', marginBottom: '48px' }} />

        <h3>Estrutura do Projeto</h3>
        <p style={{ color: '#757575', marginTop: '-16px', marginBottom: '32px' }}>Adicionar componentes e Atividades detalhadas</p>

        {componentList.length === 0 ? 
          <InputDropdown 
            title={"Adicionar Componente"} 
            placeholders={["Nome do componente", "Descrição"]}
            onInputChange={(e: any) => console.log(e.target.value)}
            onClick={() => handleClick('component')}
            buttons={true}
          />
        : 
        <>
          <InputDropdown 
            title={"Adicionar Componente"} 
            placeholders={["Nome do componente", "Descrição"]}
            onClick={() => handleClick('component')}
            buttons={true}
          />
          {componentList.map((value) => (
            <InputDropdown 
              key={Math.random()}
              title={"Adicionar Componente"} 
              placeholders={["Nome do componente", "Descrição"]}
              onClick={() => handleClick('component')}
            />
          ))}
        </>
        }

        {activityList.length === 0 ? 
          <InputDropdown 
            title={"Adicionar Atividades"} 
            placeholders={["Digite o nome da atividade que deseja adicionar"]}
            onClick={() => handleClick('activity')}
            buttons={true}
            activity={true}
          />
        : 
          <>
            <InputDropdown 
              title={"Adicionar Atividades"} 
              placeholders={["Digite o nome da atividade que deseja adicionar"]}
              onClick={() => handleClick('activity')}
              buttons={true}
            />
            {componentList.map((value) => (
              <InputDropdown
                key={Math.random()}
                title={"Adicionar Atividades"} 
                placeholders={["Digite o nome da atividade que deseja adicionar"]}
                onClick={() => handleClick('activity')}
              />
            ))}
          </>
        }

        <div style={{ display: "flex" , justifyContent: "flex-end"}}>
          <button
            style={{ 
              background: '#0898B5', 
              color: '#FFF', 
              borderRadius: '4px', 
              transition: 'background-color 0.3s ease',
              boxShadow: 'none',
              filter: "none",
              height: '7vh',
              width: '20%',
              marginTop: '32px',
              marginRight: '64px'
            }}
          >
            Concluir Cadastro
          </button>
        </div>

        <div style={{ marginTop: '88px', marginBottom: '100px' }}>
          <Link href={""} style={{ color: '#0898B5', fontSize: '14px' }}>
            <u>Task não encontrada?</u>
          </Link>
          <p style={{ color: '#0898B5', marginTop: '8px', fontSize: '14px' }} >Entre em contato com especialistas para obter uma estimativa personalizada.</p>
        </div>
      </>
    )
  }
  