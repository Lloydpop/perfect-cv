import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import cat from "../../../Assets/cat2.webp";
import Image from "../../../Component/Image/Image";
const Tips = () => {
  return (
    <div>
      <Flex
        w={"140px"}
        h={"34px"}
        className="bg-blue-600"
        justifyContent={"center"}
        m={"auto"}
        mb={"-15px"}
        pos={"relative"}
        zIndex={"10"}
        borderRadius={"16px"}
      >
        <span className="block mt-1 font-medium text-white">
          {" "}
          Tips & Advice
        </span>
      </Flex>
      <Box
        height={"400px"}
        w={"100%"}
        boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px; "}
        overflow={"hidden"}
      >
        <ul className="list-disc flex flex-col p-8  gap-5 mt-6 text-sm ">
          <li className="">Use a professional sounding email address.</li>
          <li>
            Other info like phone number, location, and job title are optional.
            Check the job requirements to see what you should include.
          </li>
        </ul>
        <Image src={cat} width={"100%"} />
      </Box>
    </div>
  );
};

export default Tips;
