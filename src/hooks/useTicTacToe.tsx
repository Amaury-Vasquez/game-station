import { useEffect, useState } from "react";

export const useTicTacToe = () => {
  const initialArray = () => [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const [gameBoard, setGameBoard] = useState(initialArray());
  const [gameEnded, setEnd] = useState(false);
  const [message, setMessage] = useState("");
  const [moveCount, setCount] = useState(0);
  const [userTurn, setTurn] = useState(true);
  const [win, setWin] = useState(0);

  const onClick = (i: number, j: number) => {
    const vertical = (arr: number[][]) => {
      let count;
      for (let i = 0, tmp; i < 3; i++) {
        count = 0;
        tmp = arr[0][i];
        for (let j = 0; j < 3 && tmp !== 0; j++)
          tmp === arr[j][i] ? count++ : (j = 2);
        if (count === 3) return true;
      }
      return false;
    };

    const horizontal = (arr: number[][]) => {
      let count;
      for (let i = 0, tmp; i < 3; i++) {
        count = 0;
        tmp = arr[i][0];
        for (let j = 0; j < 3 && tmp !== 0; j++)
          tmp === arr[i][j] ? count++ : (j = 2);
        if (count === 3) return true;
      }
      return false;
    };

    const diagonal = (arr: number[][]) => {
      let count = 0;
      for (let i = 0, aux = arr[0][0]; i < 3; i++)
        aux !== 0 && aux === arr[i][i] ? count++ : (i = 2);
      if (count === 3) return true;
      return false;
    };

    const invertedDiagonal = (arr: number[][]) => {
      let count = 0;
      for (let i = 0, aux = arr[0][2]; i < 3; i++)
        aux !== 0 && aux === arr[i][2 - i] ? count++ : (i = 2);
      if (count === 3) return true;
      return false;
    };

    if (gameBoard[i][j] === 0) {
      const arr = [...gameBoard];
      arr[i][j] = userTurn ? 1 : -1;
      if (
        vertical(arr) ||
        horizontal(arr) ||
        diagonal(arr) ||
        invertedDiagonal(arr)
      )
        setWin(userTurn ? 1 : -1);
      setCount(moveCount + 1);
      setGameBoard(arr);
      setTurn(!userTurn);
    }
  };

  const restartGame = () => {
    setCount(0);
    setEnd(false);
    setGameBoard(initialArray());
    setWin(0);
  };

  useEffect(() => {
    if (moveCount === 9 || win !== 0) setEnd(true);
  }, [moveCount, win, setEnd]);

  useEffect(() => {
    const onLose = "Ooops, you had lost!";
    const onTie = "Close game, it's a tie!";
    const onWin = "Congratulations, you had won!";
    setMessage(win === 1 ? onWin : win === -1 ? onLose : onTie);
  }, [setMessage, win]);
  return {
    gameBoard,
    gameEnded,
    message,
    moveCount,
    onClick,
    restartGame,
    userTurn,
  };
};
