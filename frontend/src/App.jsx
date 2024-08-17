/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Logo from '/logo.svg'
import Footer from './components/Footer';

const CategoryCard = ({ title, description }) => (
  <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden border border-[#C8D2DD]">
    <div className="border-b border-[#C8D2DD] px-6 py-2">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cards');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-black text-white p-4 flex justify-between items-center px-20">
        <div className="flex items-center">
          <img src={Logo} alt="Abstract" className="mr-2" />
          <span className="font-semibold text-nowrap text-[24px]"> | Help Center</span>
        </div>
        <button className="bg-[#191a1b] text-white border-white border px-4 py-2 rounded-md text-[24px]">
          Submit a request
        </button>
      </header>

      <main >
        <div className='bg-[#DADBF1] py-12'>
          <h1 className="text-[80px] font-semibold text-center mb-8">How can we help?</h1>
          <div className="max-w-2xl mx-auto mb-12  relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 pr-10 border border-black" // Added right padding for the arrow
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-[12%] py-[10%]"> <div className="grid md:grid-cols-2 gap-20">
          {filteredCategories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
            />
          ))}
        </div></div>
      </main>

      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default App;