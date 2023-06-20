import { Box, Img } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  show?: boolean;
  borderRadius?: string | number;
  [x: string]: any;
}
const Image = ({
  src,
  alt,
  height,
  width,
  show = false,
  borderRadius,
  ...rest
}: ImageProps) => {
  return (
    <Box
      height={height}
      w={width}
      overflow={show ? "hidden" : ""}
      borderRadius={show ? "5px" : borderRadius}
      boxShadow={show ? "lg" : ""}
      {...rest}
    >
      <Img src={src} alt={alt} w={"100%"} height={"100%"} {...rest} />
    </Box>
  );
};

export default Image;
