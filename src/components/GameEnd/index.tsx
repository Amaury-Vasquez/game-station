import React from 'react';
import { Link } from 'react-router-dom';
import { VscDebugRestart } from 'react-icons/vsc';

import { Button, Congrats, GameEndMenu, Message } from './styles';

export const GameEnd = (props: {
  title: string;
  message?: string;
  callback: Function;
}) => {
  const { callback, title, message } = props;
  return (
    <GameEndMenu>
      <Congrats>{title}</Congrats>
      {message ? <Message>{message} </Message> : ''}
      <Button>
        <Link to="/"> go home </Link>
      </Button>
      <Button onClick={() => callback()}>
        play again <VscDebugRestart />
      </Button>
    </GameEndMenu>
  );
};
