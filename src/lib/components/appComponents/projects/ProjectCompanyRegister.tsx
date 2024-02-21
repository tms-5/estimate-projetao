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

export default function ProjectCompanyRegister() {
  const [openBox, setOpenBox] = React.useState(false);
  const [componentList, setComponentList] = React.useState<string[]>(['new value']);
  
  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  const handleClick = () => {
    setComponentList((prevValue: string[]) => [...prevValue, 'new value']);
  };

  console.log('componentList', componentList);

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
            <InputProjectRegister name="Nome" />
            <InputProjectRegister name="Senioridade" />
            <InputProjectRegister name="Área" />
            <InputProjectRegister name="Tecnologia" />
            <p style={{ marginBottom: '4px', width: '100%'}}>Bibliotecas</p>
            <div style={{ width: '80%' }}>
              <ChipsArray onChangeValues={() => console.log()} />
            </div>
          </div>
        </div>

        <hr style={{ marginTop: '48px', marginBottom: '48px' }} />

        <h3>Estrutura do Projeto</h3>
        <p style={{ color: '#757575', marginTop: '-16px', marginBottom: '32px' }}>Adicionar componentes e Atividades detalhadas</p>

        {componentList.length === 1 ? 
          <InputDropdown 
            title={"Adicionar Componente"} 
            placeholders={["Nome do componente", "Descrição"]}
            onClick={handleClick}
          />
        : 
          componentList.map((value) => (
            <InputDropdown 
              key={Math.random()}
              title={"Adicionar Componente"} 
              placeholders={["Nome do componente", "Descrição"]}
              onClick={handleClick}
            />
          ))
        }

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
  