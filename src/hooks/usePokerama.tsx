import { useEffect, useState } from 'react';
import { createRandomArray } from '../functions';

import { PokeCardValues } from '../interfaces/index';

export const useGame = (cardNumber: number = 20) => {
  const [attempts, setAttempts] = useState(0);
  const [loadCount, setCount] = useState(0);
  const [loaded, setLoad] = useState(false);
  const [gameEnded, setEnd] = useState(false);
  const [numbers, setNumbers] = useState<Array<number>>([]);
  const [prevCard, setPrev] = useState<PokeCardValues | undefined>();
  const [score, setScore] = useState(0);

  const compareCards = (a: PokeCardValues, b: PokeCardValues) =>
    a.id !== b.pokeId && a.pokeId === b.pokeId;

  const callback = (card: PokeCardValues) => {
    if (prevCard) {
      if (compareCards(prevCard, card)) {
        card.setter(true);
        setScore(score + 1);
      } else {
        card.setter(true);
        setAttempts(attempts + 1);
        setTimeout(() => {
          prevCard.setter(false);
          card.setter(false);
        }, 1000);
      }
      setPrev(undefined);
    } else {
      card.setter(true);
      setPrev(card);
    }
  };

  const onCardLoad = () => setCount(loadCount + 1);

  const restartGame = () => {
    setAttempts(0);
    setCount(0);
    setEnd(false);
    setLoad(false);
    setNumbers([]);
    setPrev(undefined);
    setScore(0);
  };

  useEffect(() => {
    if (numbers.length === 0) setNumbers(createRandomArray(cardNumber / 2));
  }, [cardNumber, numbers, setNumbers]);

  useEffect(() => {
    if (score === cardNumber / 2) {
      setEnd(true);
      setLoad(false);
    }
  }, [cardNumber, score, setEnd]);

  useEffect(() => {
    if (loadCount + 1 === cardNumber) setTimeout(() => setLoad(true), 1000);
  }, [loadCount, cardNumber, setLoad, loaded]);

  return {
    callback,
    numbers,
    loadCount,
    loaded,
    onCardLoad,
    score,
    attempts,
    gameEnded,
    restartGame,
  };
};
