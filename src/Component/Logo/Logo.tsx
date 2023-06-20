import { Box } from "@chakra-ui/react";
import LogoIcon from "../../Assets/chat-perfect.png";
import React from "react";
interface LogoProp {
  src?: string;
}
const Logo = ({ src = LogoIcon }: LogoProp) => {
  return (
    <Box className="text-2xl font-bold text-blue-700" fontFamily={"sacramento"}>
      Perfect.CV{" "}
    </Box>
  );
};

export default Logo;
