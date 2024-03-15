import { useState } from "react";
import Button from "../../button/Button";
import Input from "../../input/Input";
import PageTitle from "../../pageTitle/PageTitle";

const styles = {
  marginBottom: "8px",
  width: "100%",
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid #CDE1FF",
  boxShadow: 'none',
};

const styles2 = {
  width: '40%'
}

export default function TaskEstimate() {
  const [formData, setFormData] = useState({});

  const handleInput = (e: string | number, field: string) => {
    setFormData({ ...formData, [field]: e });
  } 

  const handleClick = () => {
    console.log('formData', formData);
  }

  return (
    <div style={{ marginBottom: '80px' }}>
      <PageTitle title='Task Estimate' subTitle={""} />
      <h2>Tela de login</h2>

      <div style={{ display: "flex", flexDirection:"row", flexWrap: "wrap", gap: '10%' }}>
        <div style={styles2}>
          <p>Senioridade</p>
          <input type="text" style={styles} onChange={e => handleInput(e.target.value, 'senior')}/>
        </div>

        <div style={styles2}>
          <p>Tecnologia</p>
          <input type="text" style={styles} onChange={e => handleInput(e.target.value, 'tech')}/>
        </div>

        <div style={styles2}>
          <p>Biblioteca</p>
          <input type="text" style={styles} onChange={e => handleInput(e.target.value, 'libs')} />
        </div>

        <div style={styles2}>
          <p>Problemas encontrados</p>
          <input type="text" style={styles} onChange={e => handleInput(e.target.value, 'problems')}/>          
        </div>

        <div style={styles2}>
          <p>Tempo gasto</p>
          <input type="number" style={styles} onChange={e => handleInput(e.target.value, 'timeSpent')} />
        </div>

        <div style={styles2}>
          <p>Tempo esperado</p>
          <input type="number" style={styles} onChange={e => handleInput(e.target.value, 'timeTarget')} />
        </div>

        <div style={{width: '90%'}}>
          <p>Sugestões</p>
          <input type="text" style={styles} onChange={e => handleInput(e.target.value, 'sugestions')} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: '10%', marginTop: '40px' }}>
        <Button
          text={"Estimar"}
          class="bg-teal-blue-100 c-white b-none no-filter p-1 w-8 fw-600"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
