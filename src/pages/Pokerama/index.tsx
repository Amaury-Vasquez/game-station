import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { VscDebugRestart } from 'react-icons/vsc';

import { Board, Restart } from './styles';
import { Popup } from '../../components/Popup';
import { GameEnd } from '../../components/GameEnd';
import { useGame } from '../../hooks/usePokerama';
import { PokeCard } from '../../components/PokeCard';
import { PokeBoard } from '../../components/PokeBoard';

export const Pokerama = () => {
  const cardNumber = 28;
  const {
    callback,
    loadCount,
    loaded,
    onCardLoad,
    numbers,
    score,
    attempts,
    gameEnded,
    restartGame,
  } = useGame(cardNumber);

  return (
    <Fragment>
      <Helmet>
        <title> Pokerama | Gamestation </title>
        <meta name="description" content="Pokemon memory game" />
      </Helmet>
      <Restart>
        <VscDebugRestart onClick={() => restartGame()} />
      </Restart>
      <Board columns={10}>
        <Popup
          active={!loaded || gameEnded}
          component={
            <GameEnd
              callback={restartGame}
              title="Congratulations, you had won"
              message={`attempts: ${attempts}`}
            />
          }
          end={cardNumber}
          gameEnded={gameEnded}
          progress={loadCount}
        />

        <PokeBoard score={score} attempts={attempts} />
        {numbers.map((item, i) => (
          <PokeCard
            key={`${i}`}
            pokeId={item}
            cardId={i}
            callback={callback}
            onLoad={onCardLoad}
            url={`https://pokeres.bastionbot.org/images/pokemon/${item}.png`}
          />
        ))}
      </Board>
    </Fragment>
  );
};
