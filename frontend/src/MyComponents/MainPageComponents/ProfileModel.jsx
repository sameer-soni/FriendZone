import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function ProfileModel({ children }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <span
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {children}
      </span>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              backgroundColor={"#f1f1f1"}
              p={5}
              borderRadius={"20px"}
              align={"center"}
              flexDir={"column"}
            >
              <Avatar
                name="Dan Abrahmov"
                size="xl"
                src="https://bit.ly/dan-abramov"
                mr={4}
              />
              <Box mt={3}>Name</Box>
              <Box mt={1}>Email</Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileModel;
