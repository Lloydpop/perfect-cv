import { FormLabel } from "@chakra-ui/react";
import React from "react";
interface LabelProps {
  id?: string;
  name?: string;
}
const Label = ({ name, id }: LabelProps) => {
  return (
    <FormLabel id={id} className="font-semibold text-2xl">
      {name}
    </FormLabel>
  );
};

export default Label;
