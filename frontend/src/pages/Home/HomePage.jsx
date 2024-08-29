import React, { useEffect, useState } from 'react'
import Header from './Header'

import { Box, Flex, Heading, Spinner, HStack } from '@chakra-ui/react'
import HelpCard from '../../components/Layout/Card/HelpCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import toast from 'react-hot-toast'


/*
 Structure:

 -------------- header-----------------
 --------------- Cards Section ----------------------

*/

const HomePage = () => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = import.meta.env.VITE_APP_BACKEND_URL;

  const FetchCards = async () => {
    try {


      setLoading(true);
      const res = await fetch(`${url}/cards`);
      const data = await res.json();

      if (!data) {
        setLoading(false);

        toast.error(data?.msg || "Internal Server Error");
        return;
      }

      if (data?.success === false) {
        setLoading(false);

        toast.error(data?.msg);
        return;
      }
      setCards(data?.cards);
    } catch (error) {
      toast.error(error);

    }
    setLoading(false);


  }


  useEffect(() => {

    FetchCards();

  }, []);

  //------------ States specific stuffs


  return (
    <>
      <Box minH={'100vh'}>

        <Navbar />

        <Box id="Header" bg={'#160C28'} py={'6%'} color={'white'}>
          <Header setCards={setCards} FetchCards={FetchCards} />
        </Box>

        <Box id="Cards" w={['100%', '80%']} minH={'60vh'} mx={'auto'} p='5'>
          <HStack alignItems={'center'} justifyContent={'center'} >

            {loading && <Spinner  />}
          </HStack>
          {!cards || cards?.length === 0 && loading === false && <Heading color={'red'} textAlign={'center'}>No Card Found</Heading>}

          <Flex
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            justify={['center', 'space-around']}
            gap={['2', '4']}
          >

            {
              cards?.map(card => {
                return <HelpCard key={card?._id} title={card?.title} description={card?.description} link={card?.link} />
              })
            }

          </Flex>
        </Box>


        <Footer />
      </Box>
    </>
  )
}

export default HomePage
