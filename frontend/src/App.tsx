import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home/Home";
import CardDetails from "./pages/CardDetails/CardDetails";
import { memo } from "react";

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:title" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default memo(App);
