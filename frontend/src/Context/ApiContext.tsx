import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { server } from "../config/settings";
import { CardType, ContextState } from "../types";
export const Context = createContext<ContextState | null>(null);
const ApiContext = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [card, setCard] = useState<CardType | undefined>();
  const getCards = async () => {
    try {
      let url = server + "/cards";
      const { data } = await axios.get<{ success: boolean; cards: CardType[] }>(
        url
      );
      setCards(data.cards);
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <Context.Provider
      value={{
        setCard,
        cards,
        setCards,
        card,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ApiContext;
