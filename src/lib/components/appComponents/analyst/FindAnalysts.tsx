import { useState } from 'react';
import SmallCard from '../../analystCard/smallCard';

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
    name: 'João Silva',
    image:
      'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
    estimated: 9,
    ranking: 2,
  },
  {
    user_id: '2',
    name: 'Julia Santos',
    image:
      'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=',
    estimated: 10,
    ranking: 1,
  },
  {
    user_id: '3',
    name: 'Daniel Oliveira',
    image:
      'https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg=',
    estimated: 8,
    ranking: 3,
  },
  {
    user_id: '4',
    name: 'Ana Souza',
    image:
      'https://t4.ftcdn.net/jpg/04/99/46/39/360_F_499463959_C7iVlJ7AwO1nYAoqv3mMakdZWoREvog5.jpg',
    estimated: 7,
    ranking: 4,
  },
];

export default function FindAnalysts() {
  const [analysts, setAnalysts] = useState<Analyst[]>(fakeData);
  const [selectedButton, setSelectedButton] = useState(0);

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
        selectAnalyst={() => {}}
      />
    ));
  };

  const orderList = () => {
    if (selectedButton === 0) {
      setAnalysts(fakeData);
    } else {
      const rankingAnalysts = analysts.sort((a, b) => a.ranking - b.ranking);
      setAnalysts(rankingAnalysts);
    }
  };

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
    orderList();
  };

  return (
    <>
      <h1 className="f-1-5">Especialistas</h1>
      <p>Selecione abaixo o especialista desejado para estimar seu projeto</p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
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
    </>
  );
}
