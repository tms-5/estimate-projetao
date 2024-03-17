import { useState } from 'react';
import SmallCard from '../../analystCard/smallCard';
import PopUp from '../../popUp';
import {
  Especialista1,
  Especialista2,
  Especialista3,
  Especialista4,
} from '../../../assets/images';

interface Analyst {
  user_id: string;
  image: string;
  name: string;
  estimated: number; // number of correct answers
  ranking: number;
}

const fakeData: Analyst[] = [
  {
    user_id: '1',
    name: 'Paulo Vitor',
    image: Especialista2.src,
    estimated: 11,
    ranking: 2,
  },
  {
    user_id: '2',
    name: 'Thamires Morais',
    image: Especialista1.src,
    estimated: 12,
    ranking: 1,
  },
  {
    user_id: '3',
    name: 'Eduardo Melo',
    image: Especialista3.src,
    estimated: 10,
    ranking: 3,
  },
  {
    user_id: '4',
    name: 'Luis Felipe',
    image: Especialista4.src,
    estimated: 10,
    ranking: 4,
  },
];

export default function FindAnalysts() {
  const [analysts, setAnalysts] = useState<Analyst[]>(fakeData);
  const [selectedButton, setSelectedButton] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSelectAnalyst = () => {
    setShowPopUp(true);
  };

  const handlePopUpButton = () => {
    setShowPopUp(false);
  };

  const renderList = () => {
    return analysts.map((analyst, index) => (
      <SmallCard
        key={index}
        user_id={analyst.user_id}
        name={analyst.name}
        image={analyst.image}
        estimated={analyst.estimated}
        ranking={analyst.ranking}
        display_ranking={selectedButton === 1}
        selectAnalyst={handleSelectAnalyst}
      />
    ));
  };

  const orderList = (index: number) => {
    if (index === 0) {
      setAnalysts(fakeData);
    } else {
      const rankingAnalysts = analysts.sort((a, b) => a.ranking - b.ranking);
      setAnalysts(rankingAnalysts);
    }
  };

  const handleButtonClick = (index: number) => {
    orderList(index);
    setSelectedButton(index);
  };

  return (
    <>
      <h1 className="f-1-5">Especialistas</h1>
      <p>Selecione abaixo o especialista desejado para estimar seu projeto</p>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <div className="ranking-button-section">
          <div
            className="ranking-button "
            onClick={() => handleButtonClick(0)}
            style={
              selectedButton === 0
                ? { backgroundColor: '#081734', color: '#ffffff' }
                : {}
            }
          >
            <p>Todos</p>
          </div>
          <div
            className="ranking-button"
            onClick={() => handleButtonClick(1)}
            style={
              selectedButton === 1
                ? { backgroundColor: '#081734', color: '#ffffff' }
                : {}
            }
          >
            <p>Ranking</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        {renderList()}
      </div>
      {showPopUp && (
        <PopUp
          text="Deseja enviar por email uma proposta para este especialista?"
          buttonText2="Sim"
          buttonText1="Não"
          buttonAction1={handlePopUpButton}
          buttonAction2={handlePopUpButton}
        />
      )}
    </>
  );
}
