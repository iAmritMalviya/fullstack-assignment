import { useState } from "react";
import { useCreatePost } from "../context/postContext";
import AxiosBase from "../utils/axiosBase";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const PostCardModal = () => {
  const { isOpen, handleClose } = useCreatePost();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.title.trim() && data.description.trim()) {
        const res = await AxiosBase.post("/api/cards", data);
        if (res.data.error) {
          toast.error(res.data.error || "Error in creating card");
          throw new Error(res.data.error || "Error in posting the data");
        }
        handleClose();
        setData({
          title: "",
          description: "",
        });
        toast.success("Card created successfully");
        // location.reload();
      }
    } catch (error) {
      console.log(error.message + "Error in posting the data");
    }
  };

  return (
    <div
      className={`fixed inset-0  overflow-hidden flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg transition-opacity duration-300 ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none z-0"
      }`}
    >
      <div
        className={` relative w-3/4 lg:w-3/6 xl:w-2/5 mx-auto  md:w-4/6 lg:h-auto   p-3 rounded-lg shadow-lg  bg-white  translate duration-300   overflow-hidden
             ${isOpen ? "translate-y-0 overflow-hidden" : "translate-y-full"}
             ${isOpen ? "opacity-100" : "opacity-0"}
             `}
      >
        <button
          onClick={handleClose}
          className="text-red-500 rounded-full hover:bg-fuchsia-100 p-2   cursor-pointer absolute top-[-11px] md:top-2 right-1 "
        >
          <IoCloseSharp size={30} onClick={handleClose} />
        </button>
        <h3 className="text-2xl md:text-3xl text-center font-serif">
          Create a Card
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-2 md:p-5  items-center justify-center overflow-hidden"
        >
          <input
            type="text"
            name="title"
            placeholder="Enter your title "
            required
            className="rounded-lg p-4 text-lg outline-none  w-full border-gray-500  border hover:border-black"
            value={data.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Enter your Description "
            required
            className="rounded-lg p-4 text-lg outline-none  w-full border-gray-500  border hover:border-black"
            value={data.description}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="text-lg font-semibold text-center w-full p-3  bg-black text-white hover:opacity-80"
          >
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostCardModal;
