import { CardsType } from "../constants/cards";

export const shuffleCards = (cards: CardsType[]): CardsType[] => {
  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card, id) => ({ ...card, id }));
};
