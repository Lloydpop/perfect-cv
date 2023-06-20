import React from "react";
import { ModalComp } from "../../Component/Modal/Modal";
import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
const Personalize = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div>
      Personalize
      <ModalComp
        onClose={onClose}
        isOpen={isOpen}
        size="md"
        onOpen={onOpen}
        title="Upload Successful!"
      >
        <Box>
          <ul className="list-decimal flex flex-col gap-5 mt-4 font-medium">
            <li>Your information have been transfered to this resume</li>
            <li>You can quickly make some changes to it</li>
            <li>
              We have options that can make your cv look very proffessional
            </li>
            <li>Get your dream job with perfect cv</li>
          </ul>
        </Box>
      </ModalComp>
    </div>
  );
};

export default Personalize;
