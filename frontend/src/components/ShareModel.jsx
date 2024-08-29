import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useClipboard,
  IconButton,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const ShareModal = ({link,isOpen,onClose}) => {
  const { hasCopied, onCopy } = useClipboard(link); // Clipboard handling

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    twitter: `https://twitter.com/intent/tweet?url=${link}&text=Check%20this%20out!`,
    youtube: `https://www.youtube.com/`,
  };

  return (
    <>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share this resource</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text>Copy the link to share:</Text>
              <HStack>
                <Input value={link} isReadOnly />
                <Button onClick={onCopy}>
                  {hasCopied ? "Copied" : "Copy"}
                </Button>
              </HStack>
              <Text>Or share on social media:</Text>
              <HStack spacing={4}>
                <IconButton
                  as="a"
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="facebook"
                  icon={<FaFacebook />}
                  aria-label="Share on Facebook"
                />
                <IconButton
                  as="a"
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="twitter"
                  icon={<FaTwitter />}
                  aria-label="Share on Twitter"
                />
                <IconButton
                  as="a"
                  href={shareLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="red"
                  icon={<FaYoutube />}
                  aria-label="Share on YouTube"
                />
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareModal;
