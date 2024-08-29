import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { CiShare2 } from "react-icons/ci";

const HelpCard = () => {
  return (
    <>
      <Box w={['100%', '35%']} my='3' textAlign={'justify'} p='2' bg={'#E1EFE6'} borderRadius={'12px'}>

        <Heading fontSize={'1.5rem'}>Branches</Heading>

        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores fugit reprehenderit quos commodi quaerat obcaecati similique!
        <CiShare2  cursor={'pointer'} size={'25px'} style={{ color:"salmon",margin:'4px'}} />
        </Text>
      </Box>
    </>
  )
}

export default HelpCard
