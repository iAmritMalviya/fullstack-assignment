import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const BannerAndSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // here we add the  URL query  to search cards
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/?search=${query}`);
  };

  // cancel the search query
  const handleCancel = () => {
    setSearchQuery("");
    navigate("/");
  };

  return (
    <section className="flex flex-col gap-10  items-center justify-center w-full h-full p-5 py-32   lg:px-72  bg-[#dadbf0] ">
      <h2 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[600px]    font-serif text-center">
        How can we help?
      </h2>
      <div className=" w-full md:w-3/4 bg-[#ffffff] flex items-center  rounded-md p-5 border  border-black shadow-md   hover:border-blue-400 group">
        <input
          type="text"
          className="text-xl bg-[#ffffff] border-none outline-none  w-full  "
          placeholder="Search Card by title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery.length > 0 ? (
          <button onClickCapture={handleCancel}>
            <RxCross2 size={25} className="group-hover:text-rose-500 " />
          </button>
        ) : (
          <button>
            <FaArrowRight size={25} className="group-hover:text-blue-500 " />
          </button>
        )}
      </div>
    </section>
  );
};

export default BannerAndSearch;
