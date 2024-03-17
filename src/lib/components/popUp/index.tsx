import React from 'react';

interface PopUpProps {
  text: string;
  buttonText1: string;
  buttonText2: string;
  buttonAction1: () => void;
  buttonAction2: () => void;
}

export default function PopUp({
  text,
  buttonText1,
  buttonText2,
  buttonAction1,
  buttonAction2,
}: PopUpProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p>{text}</p>
        {
          // row with two buttons
        }
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: '1rem',
            gap: '2rem',
          }}
        >
          <button
            style={{
              paddingRight: '1rem',
              paddingLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '5px',
              backgroundColor: '#f78164',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={buttonAction1}
          >
            {buttonText1}
          </button>
          <button
            style={{
              paddingRight: '1rem',
              paddingLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '5px',
              backgroundColor: '#0898b5',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={buttonAction2}
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
}
