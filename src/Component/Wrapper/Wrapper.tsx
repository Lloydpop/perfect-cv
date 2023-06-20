import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SideBar } from "../NavBar/SideBar/SideBar";
import NavItem from "../NavBar/NavItem/NavItem";
import Header from "../NavBar/Header/Header";
interface WrapperProps {
  children: any;
}
const Wrapper = ({ children }: WrapperProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ base: "block", lg: "grid" }}
      gridTemplateColumns={"1fr 4fr"}
    >
      <SideBar
        isOpen={isOpen}
        onClose={onClose}
        content1={<NavItem close={onClose} />}
        content2={<NavItem />}
      />
      <Box as="div">
        <Header onOpen={onOpen} />
        <Box as="div" px={7} py={7}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Wrapper;
