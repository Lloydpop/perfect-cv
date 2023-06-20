import { useState } from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import ErrorMessage from "../Error/Error";
import Label from "../Label/Label";
interface InputProps {
  error?: string;
  value?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
}

export const TextAreaElement = ({
  error,

  value,
  id,
  label,
  placeholder,
  onChange,
  disabled,
}: InputProps) => {
  return (
    <Box as="div" pos="relative">
      {label && <Label name={label} id={id} />}
      <Textarea
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        border={"1px solid #d3d0d0"}
        className="resize-none placeholder-gray-800"
        minH={"200px"}
      />

      {error && <ErrorMessage />}
    </Box>
  );
};

export default TextAreaElement;
