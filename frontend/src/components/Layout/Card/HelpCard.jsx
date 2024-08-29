import { Box, Heading, Text,useDisclosure} from '@chakra-ui/react'
import React from 'react'

import { CiShare2 } from "react-icons/ci";
import ShareModal from '../../ShareModel';

const HelpCard = ({ title, description, link }) => {

  //--------- Disclousures 

  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra modal controls

  return (
    <>
      <ShareModal isOpen={isOpen} onClose={onClose} link={link} />
      <Box w={['100%', '35%']} my='3'  p='2' bg={'#E1EFE6'} borderRadius={'12px'}>

        <Heading textTransform={'capitalize'} fontSize={'1.5rem'}>{title}</Heading>

        <Text textAlign={'justify'}>{description}
          <CiShare2 onClick={onOpen} cursor={'pointer'} size={'25px'} style={{ color: "salmon", margin: '4px' }} />
        </Text>
      </Box>
    </>
  )
}

export default HelpCard
