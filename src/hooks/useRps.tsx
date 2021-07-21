import { useEffect, useState } from 'react';

import { randomInt } from '../functions/index';

export const useRps = () => {
  const [choosed, setChoosed] = useState(false);
  const [cpuMove, setCpuMove] = useState(-1);
  const [disabled, setDisabled] = useState(false);
  const [fade, setFade] = useState(false);
  const [playerMove, setPlayerMove] = useState(-1);
  const [win, setWin] = useState(0);

  const onClick = (value: number) => {
    setPlayerMove(value);
    setCpuMove(randomInt(3, 0));
    setChoosed(true);
    setDisabled(true);
  };

  useEffect(() => {
    const getResult = (cpuMove: number) => {
      if (cpuMove === 0) {
        if (playerMove === 1) return 1;
        else if (playerMove === 2) return -1;
      } else if (cpuMove === 1) {
        if (playerMove === 2) return 1;
        else if (playerMove === 0) return -1;
      } else if (cpuMove === 2) {
        if (playerMove === 0) return 1;
        else if (playerMove === 1) return -1;
      }
      return 0;
    };
    if (choosed) {
      const result = getResult(cpuMove);
      if (result !== 0) {
        setTimeout(() => setWin(result), 1200);
        setTimeout(() => setFade(true), 3000);
        setTimeout(() => {
          setWin(0);
          setFade(false);
        }, 4000);
      }
      setTimeout(() => {
        setChoosed(false);
        setDisabled(false);
        setCpuMove(-1);
      }, 2000);
    }
  }, [
    choosed,
    cpuMove,
    fade,
    setChoosed,
    setCpuMove,
    setDisabled,
    setWin,
    playerMove,
  ]);

  return { choosed, cpuMove, disabled, fade, onClick, playerMove, win };
};
