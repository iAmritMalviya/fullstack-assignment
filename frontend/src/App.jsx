import { useEffect, useState } from "react";
import BannerAndSearch from "./components/BannerAndSearch";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AxiosBase from "./utils/axiosBase";
import toast from "react-hot-toast";
import { useCreatePost } from "./context/postContext";

const App = () => {
  const { isOpen } = useCreatePost();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await AxiosBase.get("/api/cards");
      if (res.data.error) {
        throw new Error(res.data.error || "Error in getting the cards or data");
      }
      setResult(res.data);
    } catch (error) {
      toast.error("Error in fetching cards");
      console.error("Error in fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isOpen]);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <BannerAndSearch />
        <Cards data={result} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
