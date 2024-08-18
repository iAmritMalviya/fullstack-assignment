import { Dispatch, SetStateAction } from "react";

type CardType = {
  _id: string;
  title: string;
  description: string;
};
type STATE<T> = Dispatch<SetStateAction<T>>;
interface ContextState {
  card: CardType | undefined;
  setCard: STATE<card>;
  cards: CardType[];
  setCards: STATE<CardType[]>;
}
