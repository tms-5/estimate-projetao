import Link from 'next/link';
import PageTitle from '../../pageTitle/PageTitle';
import * as React from 'react';
import ChipsArray from '@/lib/components/selection/SelectionChips';
import InputProjectRegister from '../../input/InputProjectRegister';
import Select from '../../select/Select';
import ExpandingInputComponent from '../../expensiveInput';
import { ProjectType } from '@/types/projects';
import createProject from '@/services/ProjectServices/createProject';

export default function ProjectCompanyRegister() {
  const [openBox, setOpenBox] = React.useState(false);
  const [componentList, setComponentList] = React.useState<string[]>([]);
  const [activityList, setActivityList] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<ProjectType>({
    name: '',
    description: '',
    date_start: '',
    date_predicted_conclusion: '',
    date_conclusion: '',
    developers_quantity: 0,
    develop_hours: 0,
    stack: '',
    xp_level: '',
    company_id: 0,
    company_field: '',
  }); // valores da parte de informacoes tecnicas
  const [components, setComponents] = React.useState<any>();

  const handleChipChange = (value: any) => {
    setComponents(value);
  };

  const handleOpenBox = () => {
    setOpenBox(!openBox);
  };

  const handleClick = (clickType: string) => {
    if (clickType === 'component') {
      setComponentList((prevValue: string[]) => [...prevValue, 'new value']);
    }

    if (clickType === 'activity') {
      setActivityList((prevValue: string[]) => [...prevValue, 'new value']);
    }
  };

  const handleInputChange = (value: string, field: string) => {
    setInputValue({ ...inputValue, [field]: value });
  };

  const handleButtonClick = async () => {
    try {
      const payload = {
        ...inputValue,
        company_id: 0,
        date_start: '2024-03-09T16:06:04.025Z',
        date_predicted_conclusion: '2024-03-09T16:06:04.025Z',
        date_conclusion: '2024-03-09T16:06:04.025Z',
      };
      const response = await createProject(payload);
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
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
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: '24px',
          gap: '4%',
        }}
      >
        <div style={{ width: '64%' }}>
          <h3>Infomações Técnicas</h3>
          <p style={{ color: '#757575' }}>
            {' '}
            Descreva qual área, tecnologia e biblioteca você utilizou no
            processo de concepção desse projeto.{' '}
          </p>
        </div>

        <div
          style={{
            marginTop: '24px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <InputProjectRegister
            name="Nome"
            onChange={(e) => handleInputChange(e.target.value, 'name')}
          />

          <p style={{ marginBottom: '4px', width: '100%' }}>Senioridade</p>
          <Select
            class="b-none mt-1r w-web font-nunito p-2 drop-shadow"
            options={[
              { value: 'Júnior', key: 'Jr' },
              { value: 'Pleno', key: 'Pl' },
              { value: 'Senior', key: 'Sr' },
            ]}
            onChange={(e) => handleInputChange(e.target.value, 'xp_level')}
          />

          <InputProjectRegister
            name="Área"
            onChange={(e) => handleInputChange(e.target.value, 'company_field')}
          />
          <InputProjectRegister
            name="Tecnologia"
            onChange={(e) => handleInputChange(e.target.value, 'description')}
          />
          <p style={{ marginBottom: '4px', width: '100%' }}>Bibliotecas</p>
          <ChipsArray
            onChangeValues={(values: string[]) =>
              handleInputChange(Array.from(values).join(', '), 'stack')
            }
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '24px',
        }}
      >
        <button type="button" onClick={handleButtonClick}>
          {' '}
          Salvar{' '}
        </button>
      </div>

      <hr style={{ marginTop: '48px', marginBottom: '48px' }} />

      <h3>Estrutura do Projeto</h3>
      <p style={{ color: '#757575', marginTop: '-16px', marginBottom: '32px' }}>
        Adicionar componentes e Atividades detalhadas
      </p>

      <ExpandingInputComponent name="Adicionar Componentes" />
      <ExpandingInputComponent name="Adicionar Atividades" />

      {/* {componentList.length === 0 ? (
        <>
        </>
      ) : (
        <>
          <InputDropdown
            title={'Adicionar Componente'}
            placeholders={['Nome do componente', 'Descrição']}
            onClick={() => handleClick('component')}
            buttons={true}
          />
          {componentList.map((value) => (
            <InputDropdown
              key={Math.random()}
              title={'Adicionar Componente'}
              placeholders={['Nome do componente', 'Descrição']}
              onClick={() => handleClick('component')}
            />
          ))}
        </>
      )}

      {activityList.length === 0 ? (
        <InputDropdown
          title={'Adicionar Atividades'}
          placeholders={['Digite o nome da atividade que deseja adicionar']}
          onClick={() => handleClick('activity')}
          buttons={true}
          activity={true}
        />
      ) : (
        <>
          <InputDropdown
            title={'Adicionar Atividades'}
            placeholders={['Digite o nome da atividade que deseja adicionar']}
            onClick={() => handleClick('activity')}
            buttons={true}
          />
          {componentList.map((value) => (
            <InputDropdown
              key={Math.random()}
              title={'Adicionar Atividades'}
              placeholders={['Digite o nome da atividade que deseja adicionar']}
              onClick={() => handleClick('activity')}
            />
          ))}
        </>
      )} */}

      <div style={{ marginTop: '88px', marginBottom: '100px' }}>
        <Link href={'/analyst/analysts'} style={{ color: '#0898B5' }}>
          <u>Task não encontrada?</u>
        </Link>
        <p style={{ color: '#0898B5', marginTop: '8px' }}>
          Entre em contato com especialistas para obter uma estimativa
          personalizada.
        </p>
      </div>
    </>
  );
}
