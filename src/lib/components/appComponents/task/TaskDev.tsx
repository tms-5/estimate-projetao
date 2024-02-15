import DataTable from "../../dataTable/DataTable";
import PageTitle from "../../pageTitle/PageTitle";
import ChipsArray from "../../selection/SelectionChips";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TaskDev() {
  function onSearch(searchTerm: string) {
    console.log(searchTerm);
  }
  const [technology, setTechnology] = React.useState('');
  const [taskAction, setTaskAction] = React.useState('');
  const [component, setComponent] = React.useState('');
  const [libs, setLibs] = React.useState<Array<string>>([]);

  const handleChangeTechnology = (event: SelectChangeEvent) => {
    setTechnology(event.target.value);
  };

  const handleChangeTaskAction = (event: SelectChangeEvent) => {
    setTaskAction(event.target.value);
  }

  const handleChangeComponent = (event: SelectChangeEvent) => {
    setComponent(event.target.value);
  }

  let headers = [
    { name: "Nome", value: "name" },
    { name: "Tecnologia", value: "tecnology" },
    { name: "Biblioteca", value: "library" },
  ];

  let data = [
    {
      name: "Criar gráfico de pizza",
      tecnology: ["ReactJs", "VueJs", "SvelteJs"],
      library: ["D3-Scale", "D3"],
    },
    {
      name: "Criar formulário",
      tecnology: ["ReactJs"],
      library: ["React forms", "Svelte forms"],
    },
    {
      name: "Criar tabela",
      tecnology: ["ReactJs", "SvelteJs"],
      library: ["Svelte Components"],
    },
  ];

  return (
    <>
      <PageTitle title="TASKS" subTitle="" />
      <div className="mt-1r" />
      <div className="d-flex mt-1r">
        <div className="d-grid w-50 mr-2r">
          <div className="f-07 fw-500 mb-1">Ação da task:</div>
          <FormControl sx={{ maxHeight: 36, height: 36 }} size="small">
            <Select
              value={taskAction}
              onChange={handleChangeTaskAction}
              displayEmpty
              size="small"
              inputProps={{ 'aria-label': 'Without label', }}
              MenuProps={{ sx: { maxHeight: 500, fontSize: '0.7rem' } }}
              sx={{ maxHeight: 36, height: 36, fontSize: '0.7rem' }}
              placeholder="Tecnologia"
            >
              <MenuItem sx={{ fontSize: '0.7rem' }}>lorem ipsum</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500 mb-1">Componente de manipulação:</div>
          <FormControl sx={{ maxHeight: 36, height: 36 }} size="small">
            <Select
              value={component}
              onChange={handleChangeComponent}
              displayEmpty
              size="small"
              inputProps={{ 'aria-label': 'Without label', }}
              MenuProps={{ sx: { maxHeight: 500, fontSize: '0.7rem' } }}
              sx={{ maxHeight: 36, height: 36, fontSize: '0.7rem' }}
              placeholder="Tecnologia"
            >
              <MenuItem sx={{ fontSize: '0.7rem' }}>lorem ipsum</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="d-flex mt-1r   justify-flex-start align-start">
        <div className="d-grid w-50 mr-2r">
          <div className="f-07 fw-500 mb-1">Tecnologia:</div>
          <FormControl sx={{ maxHeight: 36, height: 36 }} size="small">
            <Select
              value={technology}
              onChange={handleChangeTechnology}
              displayEmpty
              size="small"
              inputProps={{ 'aria-label': 'Without label', }}
              MenuProps={{ sx: { maxHeight: 500, fontSize: '0.7rem' } }}
              sx={{ maxHeight: 36, height: 36, fontSize: '0.7rem' }}
              placeholder="Tecnologia"
            >
              <MenuItem sx={{ fontSize: '0.7rem' }}>lorem ipsum</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-grid w-50">
          <div className="f-07 fw-500 mb-1">Biblioteca:</div>
          <ChipsArray onChangeValues={setLibs}/>
        </div>
      </div>
      <DataTable headers={headers} data={data} />
    </>
  );
}
