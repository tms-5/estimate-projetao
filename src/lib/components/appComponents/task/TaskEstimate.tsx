import { useState } from "react";
import Button from "../../button/Button";
import PageTitle from "../../pageTitle/PageTitle";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from "next/router";

const styleModal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #CDE1FF',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClose = () => setOpen(false);

  const handleInput = (e: string | number, field: string) => {
    setFormData({ ...formData, [field]: e });
  } 

  const handleClick = () => {
    setOpen(!open);
  }

  const handleGoToHome = () => {
    setOpen(false);
    router.push('/home');
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Estimativa cadastrada!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Sua estimativa foi cadastrada com sucesso! Em breve você receberá um feedback.
            </Typography>
            <Button
              text={"Voltar para a tela inicial"}
              class="bg-teal-blue-100 c-white b-none no-filter p-1 w-4 fw-300 mt-900"
              onClick={handleGoToHome}
            />
          </Box>
        </Modal>
      </div>
    </div>
  )
}
