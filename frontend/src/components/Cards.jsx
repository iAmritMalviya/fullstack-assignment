import { useCreatePost } from "../context/postContext";
import CardSkeleton from "./CardSkeleton";
import DataCard from "./DataCard";
import { useSearchParams } from "react-router-dom";

const Cards = ({ data, isLoading }) => {
  const { handleOpen } = useCreatePost();
  const [searchParams] = useSearchParams();

  // here we get the search query from the URL
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // and here we filter the data based on the query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  const hasData = filteredData.length > 0;

  return (
    <main className="w-full p-5 py-10 md:px-10 lg:px-60">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={`skeleton-${i}`} />
            ))
          : hasData
          ? filteredData.map((item) => (
              <DataCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))
          : null}
      </div>
      {!isLoading && !hasData && (
        <div className="bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-3 w-3/4 mx-auto p-5 mt-10">
          <p className="text-lg text-gray-400 text-center">
            Currently we don&acute;t have any cards.
          </p>
          <button
            onClick={handleOpen}
            className="text-white text-lg bg-neutral-700 hover:bg-neutral-800 rounded-lg p-2 px-4"
          >
            Create
          </button>
        </div>
      )}
    </main>
  );
};

export default Cards;
