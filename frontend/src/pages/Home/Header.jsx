import { Box, Heading, Spinner, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormInput from '../../components/Layout/FormInput'

// Icons
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';

const Header = ({ setCards, FetchCards }) => {

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [cnt, setCnt] = useState(0);

  //---------Function Stuff
  const handleChange = (e) => {
    setSearch(e.target.value);
    
    if (e.target.value === '' && cnt == 1){
      FetchCards();

      setCnt(0);
    }
  

  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {

      handleSearch();
      setCnt(1);
    }
  }

  //---------Function to search 
  const handleSearch = async () => {
    setLoading(true);

    if (search?.length < 3) {
      setLoading(false);
      toast.error("Keyword must be more then 3 letters")
      return;
    }
    try {
      const url = import.meta.env.VITE_APP_BACKEND_URL;
      const res = await fetch(`${url}/search?q=${search}`);
      const data = await res.json();

      if (!data) {
        setLoading(false);
        toast.error(data?.msg || "Internal Server Error")
        return
      }

      if (data?.success === false) {
        setLoading(false);

        toast.error(data?.msg);
        return;
      }

      setCards(data?.card);

    } catch (error) {
      toast.error(error);
    }
    setLoading(false);

  }

  return (
    <>
      <Box w={'100%'} >

        <Box mx={'auto'} w={'80%'} py='auto' >
          <Heading fontSize={'3.5rem'} textAlign={'center'}>How Can We Help 💁‍♂️?</Heading>

          <FormInput my='3' onEnter={handleEnter} border='1px solid white' outline='white' icon={loading ? <Spinner /> : <CiSearch />} handleChange={handleChange} w={['100%', '45%']} mx='auto' name={'search'} placeholder={'search'} id='search' />
        </Box>
      </Box>
    </>
  )
}

export default Header
