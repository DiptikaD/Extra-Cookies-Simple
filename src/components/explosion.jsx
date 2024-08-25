import { IconButton } from '@mui/material';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';

function Explosion() {
  const [explosion, setExplosion] = useState(false);

  const triggerExplosion = () => {
    setExplosion(true);
    setTimeout(() => {
      setExplosion(false); 
    }, 3000); 
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <IconButton color="pink" onClick={triggerExplosion}>
        <CakeSharpIcon/>
      </IconButton>
      {explosion && (
        <ConfettiExplosion
          width={window.innerWidth}
          height={window.innerHeight}
          duration={3000} force={0.8} particleCount={250}
        />
      )}
    </div>
  );
}

export default Explosion;
