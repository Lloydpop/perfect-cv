import React from "react";
import UI from "../../Assets/cat2.webp";
import { Heading } from "@chakra-ui/react";
import ButtonElement from "src/Component/Button/Button";
const ModalContent = ({ onClick }) => {
  return (
    <div>
      <img src={UI} width={"200px"} className="m-auto" />
      <Heading size={"md"} className="text-center">
        Are you sure you want to continue without adding work experience?
      </Heading>
      <p className="mt-4 text-center text-sm">
        We highly recommend you add your work experience. Don't have any work
        experience? Add school leadership positions, internships, summer jobs,
        and unofficial jobs.
      </p>
      <div className="flex items-center justify-center gap-7 mt-4">
        <ButtonElement variant="outline">Back</ButtonElement>
        <ButtonElement variant="secondary" onClick={onClick}>
          Continue
        </ButtonElement>
      </div>
    </div>
  );
};

export default ModalContent;
