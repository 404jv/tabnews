import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Confetti from 'react-confetti';


function Home() {
  const [timeLeft, setTimeLeft] = useState('');
  const [confettiActive, setConfettiActive] = useState(false);

  const handleClick = () => {
    setConfettiActive(true);

    const mjMusic = document.getElementById("mj-music");
    if (!mjMusic) return;
    mjMusic.play();
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetTime = new Date().setHours(21, 0, 0, 0);
      const currentTime = new Date();
      let timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        setTimeLeft(`0 horas, 0 minutos, 0 segundos`);
        return
      }

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours} horas, ${minutes} minutos, ${seconds} segundos`);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);



  return (
    <div className={styles.container}>

      <h1>Oi, Lorena</h1>
      <p>Faltam exatamente: {timeLeft} para a gente sair juntos</p>

      <h1>Preparada?</h1>
      <div>
        <button onClick={handleClick} className={styles.buttonGreen}>👍</button>
        {confettiActive && <Confetti />}
        <button className={styles.buttonRed}>👎</button>
      </div>

      <audio src="/taylor.mp4" id="mj-music"></audio>
    </div>
  )
}

export default Home
