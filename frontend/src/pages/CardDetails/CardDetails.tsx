import axios, { AxiosError } from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../config/settings";
import Card from "../../components/Card/Card";
import { Context } from "../../Context/ApiContext";
import { CardType, ContextState } from "../../types";

const CardDetails = () => {
  const { title } = useParams();
  const { card, setCard } = useContext(Context) as ContextState;
  const getCardDetails = async () => {
    try {
      let url = server + "/cards/" + title;
      const { data } = await axios.get<{ success: boolean; card: CardType }>(
        url
      );
      setCard(data.card);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) alert(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getCardDetails();
    return () => {
      setCard(undefined);
    };
  }, [title]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      {card && <Card title={card?.title} description={card?.description} />}
    </div>
  );
};

export default CardDetails;
