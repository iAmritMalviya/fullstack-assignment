import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box bg={'black'} color={'white'} px='4' py='4' >
        <Text textAlign={'center'}>Copyright &copy; abstract@2k24 | All rights reserved</Text>
      </Box>
    </>
  )
}

export default Footer
