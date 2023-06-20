import { Box } from "@chakra-ui/react";
import React from "react";
interface ContainerProps {
  children?: any;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <Box as="div" bg={"#fff"} p={4} className="shadow-sm rounded-lg border">
      {children}
    </Box>
  );
};

export default Container;
