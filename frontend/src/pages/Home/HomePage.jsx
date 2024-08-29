import React from 'react'
import Header from './Header'

import { Box, Flex, Stack ,Grid} from '@chakra-ui/react'
import HelpCard from '../../components/Layout/Card/HelpCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


/*
 Structure:

 -------------- header-----------------
 --------------- Cards Section ----------------------

*/

const HomePage = () => {
  return (
    <>
      <Box minH={'100vh'}>

        <Navbar />

        <Box id="Header" bg={'#160C28'} py={'6%'} color={'white'}>
          <Header />
        </Box>

        <Box id="Cards" w={['100%','80%']} mx={'auto'} p='5'>
        <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium and above
      wrap="wrap" // Enable wrapping of items
      justify={['center','space-around']} // Center items horizontally
      alignItems={'center'} // Center items vertically
      gap={['2','4']} // Add space between the boxes
    >
          {/* <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'} wrap={'wrap'}> */}
     

            {/* <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}> */}
              <HelpCard />
              <HelpCard />
              <HelpCard />
              <HelpCard />
              <HelpCard />
              <HelpCard />
            {/* </Stack> */}
    
</Flex>
          {/* </Stack> */}
        </Box>


        <Footer />
      </Box>
    </>
  )
}

export default HomePage
