import { ChangeEvent, useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { FaArrowRight } from "react-icons/fa6";
import { server } from "../../config/settings";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/ApiContext";
import { ContextState } from "../../types";

const Home = () => {
  const navigate = useNavigate();
  const { cards } = useContext(Context) as ContextState;
  const [searchTitle, setSearchTitle] = useState<string>("");
  const searchHandler = () => {
    navigate("/cards/" + searchTitle);
  };

  return (
    <div>
      {" "}
      <div className="p-14 bg-gray-200 flex flex-col justify-center items-center gap-10">
        <h1 className="font-semibold text-3xl lg:text-6xl text-center">How can we help?</h1>
        <div className="relative  border-red-600">
          <FaArrowRight
            onClick={searchHandler}
            className="absolute right-4 top-5"
          />{" "}
          <input
            type="text"
            className="p-4  w-[300px]  sm:w-[450px] lg:w-[650px] shadow-md"
            placeholder="Search"
            value={searchTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTitle(e.target.value)
            }
          />
        </div>
      </div>
      <div className="p-14 md:px-52   grid grid-col-1 md:grid-cols-2 place-items-center row-gap">
        {cards &&
          cards.map(({ _id, title, description }) => (
            <Card key={_id} title={title} description={description} />
          ))}
      </div>
    </div>
  );
};

export default Home;
