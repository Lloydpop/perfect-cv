import { Checkbox, Flex } from "@chakra-ui/react";
import React from "react";
import Label from "../Label/Label";
interface CheckBoxProp {
  label?: string;
  checked?: boolean;
  onClick?: () => void;
}
const CheckboxElement = ({ label, checked, onClick }: CheckBoxProp) => {
  return (
    <Flex alignItems={"center"} gap={1}>
      <Checkbox type="checkbox" checked={checked} onChange={onClick} />
      <span className="mt-2"> {label && <Label name={label} />}</span>
    </Flex>
  );
};

export default CheckboxElement;
