import { Helmet } from 'react-helmet-async';
import React, { Fragment } from 'react';
import { MdError } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { GoQuestion } from 'react-icons/go';

import { useRps } from '../../hooks/useRps';
import { Card, Game, WinnerDialog } from './styles';
import { Popup } from '../../components/Popup';

export const Rps = () => {
  const cards = [
    { name: 'rock', cover: <GiRock /> },
    { name: 'paper', cover: <GiPaper /> },
    { name: 'scissors', cover: <GiScissors /> },
  ];
  const {
    choosed,
    cpuMove,
    disabled,
    fade,
    onClick,
    playerMove,
    win,
  } = useRps();
  const getCpuCards = () => {
    const arr = [0, 1, 2];
    return arr.map((i) => (
      <Card primary={false} key={`${i}+cpu`}>
        {cpuMove === i ? cards[i].cover : <GoQuestion />}
      </Card>
    ));
  };

  const Win = () => (
    <Fragment>
      <FcCheckmark />
      <p> Congratulations, you had won!</p>
    </Fragment>
  );

  const Lost = () => (
    <Fragment>
      <MdError />
      <p> Ooops, you lost, try again! </p>
    </Fragment>
  );
  return (
    <Fragment>
      <Helmet>
        <title> Rock, paper & scissors | Gamestation </title>
        <meta name="description" content="Rock, paper, scissors game" />
      </Helmet>
      <Game>
        {cards.map((item, i) => (
          <Card
            disabled={disabled}
            primary={true}
            key={`${i}+${item.name}`}
            onClick={() => onClick(i)}
          >
            {choosed && i !== playerMove ? <GoQuestion /> : item.cover}
          </Card>
        ))}
        {getCpuCards()}
        {
          <Popup
            active={!(win === 0)}
            gameEnded={!(win === 0)}
            component={
              <WinnerDialog fade={fade} win={win === 1}>
                {win === 1 ? <Win /> : <Lost />}
              </WinnerDialog>
            }
          />
        }
      </Game>
    </Fragment>
  );
};
