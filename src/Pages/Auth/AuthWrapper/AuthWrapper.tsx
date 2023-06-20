import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TempBanner from "../../../Assets/tempBanner.svg";
import Logo from "../../../Component/Logo/Logo";
interface AuthWrapperProps {
  heading?: string;
  subTitle?: string;
  children: any;
}
const AuthWrapper = ({ heading, subTitle, children }: AuthWrapperProps) => {
  return (
    <Box
      className="scroller"
      height={"100vh"}
      display={{ base: "flex", lg: "grid" }}
      gridTemplateColumns={"1fr 1fr"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        rowGap={6}
      >
        <Box as="div" display="flex" flexDirection={"column"} rowGap={6}>
          <Logo />
          <Heading size={"lg"}>{heading}</Heading>
          <Text as="span">{subTitle}</Text>
          {children}
        </Box>
      </Flex>
      <Flex
        mt={-9}
        bg={"#2563eb"}
        className="scroller"
        height={"57vw"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        display={{ base: "none", lg: "flex" }}
      >
        <img src={TempBanner}></img>
      </Flex>
    </Box>
  );
};

export default AuthWrapper;
