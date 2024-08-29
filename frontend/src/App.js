import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AddCard from './pages/AddCard';

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/addrequest" element={<AddCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
