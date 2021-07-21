import { CatalogCardData } from "../interfaces/index";

export const useHome = () => {
  const data: CatalogCardData[] = [
    {
      imgUrl: "https://i.imgur.com/pxyP0Et.png",
      link: "/pokerama",
      name: "pokerama",
    },
    {
      imgUrl: "https://i.imgur.com/KCuuYCi.png",
      link: "/tic-tac-toe",
      name: "tic-tac-toe",
    },
    {
      imgUrl: "https://i.imgur.com/dx3kTM7.png",
      link: "/rock-paper-scissors",
      name: "rock, paper & scissors",
    },
  ];
  return { data };
};
