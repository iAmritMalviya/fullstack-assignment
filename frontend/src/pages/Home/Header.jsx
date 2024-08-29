import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormInput from '../../components/Layout/FormInput'

// Icons
import { CiSearch } from "react-icons/ci";

const Header = () => {

    const [search,setSearch] = useState('');

    //---------Function Stuff
    const handleChange = (e) => setSearch(e.target.value);

    //---------Function to search 
    const handleSearch = ()=>{

    }

  return (
    <>
      <Box w={'100%'} >

            <Box    mx={'auto'} w={'80%'} py='auto' >
                <Heading fontSize={'3.5rem'} textAlign={'center'}>How Can We Help 💁‍♂️?</Heading>

                <FormInput my='3' border='1px solid white' outline='white' icon={<CiSearch />} w={['100%','45%']} mx='auto' name={'search'} placeholder={'search'} id='search' />
            </Box>
      </Box>
    </>
  )
}

export default Header
