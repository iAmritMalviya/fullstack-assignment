import { useCreatePost } from "../context/postContext";

const Navbar = () => {
  const { handleOpen } = useCreatePost();
  return (
    <header className=" h-10 w-full flex justify-between items-center bg-black p-5 py-10 lg:px-28 ">
      <div className="flex items-center gap-x-3 ">
        <img src="/logo.svg" alt="Logo" className=" size-10" />
        <p className="text-white space-x-2 text-xl   md:text-2xl">
          <span className="font-semibold">Abstract</span>
          <span>|</span>
          <span className="font-light"> Help Center</span>
        </p>
      </div>

      <button
        onClick={handleOpen}
        className="bg-[#191a1b] text-white text-wrap ring-1 ring-white rounded-lg text-sm md:text-lg    md:px-4 p-2"
      >
        Submit a request
      </button>
    </header>
  );
};

export default Navbar;
