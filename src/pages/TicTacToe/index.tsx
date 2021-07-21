import { Helmet } from 'react-helmet-async';
import { ImCross } from 'react-icons/im';
import { BsCircle } from 'react-icons/bs';

import { Game, Square } from './styles';
import { Popup } from '../../components/Popup';
import { GameEnd } from '../../components/GameEnd';
import { useTicTacToe } from '../../hooks/useTicTacToe';
import { Fragment } from 'react';

export const TicTacToe = () => {
  const {
    gameBoard,
    gameEnded,
    message,
    onClick,
    restartGame,
    userTurn,
  } = useTicTacToe();

  return (
    <Fragment>
      <Helmet>
        <title> TicTacToe | Gamestation </title>
        <meta name="description" content="Tic tac toe game" />
      </Helmet>
      <Game>
        {gameBoard.map((item, i) =>
          item.map((el, j) => (
            <Square
              key={el + `${el}+${userTurn}` + i + j}
              onClick={() => onClick(i, j)}
            >
              {el === 1 ? <BsCircle /> : el === -1 ? <ImCross /> : null}
            </Square>
          ))
        )}
        <Popup
          active={gameEnded}
          gameEnded={gameEnded}
          component={<GameEnd title={message} callback={restartGame} />}
        />
      </Game>
    </Fragment>
  );
};
