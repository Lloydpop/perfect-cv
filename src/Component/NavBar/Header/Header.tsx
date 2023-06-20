import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ButtonElement from "../../Button/Button";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
interface HeaderProps {
  onOpen: () => void;
}
const Header = ({ onOpen }: HeaderProps) => {
  return (
    <Flex
      bg={"#fff"}
      height={"80px"}
      className="shadow-md"
      alignItems={"center"}
      justifyContent={{ base: "space-between", lg: "flex-end" }}
      px={4}
    >
      <Box display={{ base: "block", lg: "none" }}>
        <ButtonElement onClick={onOpen}>
          <Bars3Icon className="w-8 h-8 text-blue-600" />
        </ButtonElement>
      </Box>
      <Flex alignItems={"center"} gap={5}>
        <BellIcon className="w-6 h-6 text-blue-600" cursor={"pointer"} />
        <CogIcon className="w-6 h-6 text-blue-600" cursor={"pointer"} />
        <UserCircleIcon className="w-6 h-6 text-blue-600" cursor={"pointer"} />
      </Flex>
    </Flex>
  );
};

export default Header;
