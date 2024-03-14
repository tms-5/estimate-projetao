import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../button/Button';
import Image from 'next/image';
import { MedalBronze, MedalGold, MedalSilver } from '@/lib/assets/icon';

interface AnalystCardProps {
  user_id: string;
  image: string;
  name: string;
  estimated: number; // number of correct answers
  selectAnalyst: (user_id: string) => void;
  ranking: number;
  display_ranking: boolean;
}

export default function SmallCard({
  user_id,
  name,
  image,
  estimated,
  selectAnalyst,
  ranking,
  display_ranking,
}: AnalystCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/analyst/${user_id}`);
  };

  const handleSelect = () => {
    selectAnalyst(user_id);
  };

  const renderMedal = () => {
    if (ranking === 1) {
      return (
        <Image src={MedalGold} alt="ranking medal" width={40} height={40} />
      );
    } else if (ranking === 2) {
      return (
        <Image src={MedalSilver} alt="ranking medal" width={40} height={40} />
      );
    } else if (ranking === 3) {
      return (
        <Image src={MedalBronze} alt="ranking medal" width={40} height={40} />
      );
    }
  };

  return (
    <div>
      <div
        className="f-08"
        style={{
          display: display_ranking && ranking === 1 ? 'flex' : 'none',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: '10rem',
          paddingLeft: '2rem',
          color: '#36373a',
        }}
      >
        <p>#</p>
        <p>Nome</p>
        <p>Estimativas corretas</p>
      </div>
      <div className="d-flex direction-row gap-2 align-items-center mb-2r">
        <div
          className="b-10 bg-gray-5 d-flex direction-row align-items-center gap-1"
          style={{
            width: '500px',
            paddingLeft: '1rem',
            paddingRight: '5rem',
          }}
          onClick={() => handleClick()}
        >
          {display_ranking && renderMedal()}
          <img
            src={image}
            alt="analyst"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <p>{name}</p>
          <div style={{ flex: 1 }} />
          <p className="f-2">{estimated}</p>
        </div>
        <div className="d-flex direction-column align-items-center">
          <Button
            text={'Selecionar analista'}
            onClick={handleSelect}
            style="primary"
          />
          {/* <Link
          href={`/analyst/${user_id}`}
          style={{ width: 'fit-content', height: 'fit-content' }}
        >
          <p className="f-07 decoration-underline m-0 p-1">Ver Perfil</p>
        </Link> */}
        </div>
      </div>
    </div>
  );
}
