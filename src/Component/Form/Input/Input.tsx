import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import ErrorMessage from "../Error/Error";
import Label from "../Label/Label";
interface InputProps {
  type: string;
  error?: string;
  value?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
}

export const InputElement = ({
  error,
  type,
  value,
  id,
  label,
  placeholder,
  onChange,
  disabled,
}: InputProps) => {
  const [inputType, setInputType] = useState<string>(type);
  return (
    <Box as="div" pos="relative" width={"100%"}>
      {label && <Label name={label} id={id} />}
      <Input
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        type={inputType}
        border={"1px solid #d3d0d0"}
        className="placeholder-gray-500"
      />
      {type === "password" && (
        <>
          {inputType === "password" ? (
            <Button
              pos={"absolute"}
              right={0}
              top={8}
              onClick={() => setInputType("text")}
              type="button"
              backgroundColor={"transparent"}
              _hover={{
                bg: "transparent",
              }}
            >
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            </Button>
          ) : (
            <Button
              pos={"absolute"}
              right={0}
              top={8}
              backgroundColor={"transparent"}
              _hover={{
                bg: "transparent",
              }}
              onClick={() => setInputType("password")}
              type="button"
            >
              <EyeIcon className="h-5 w-5 text-gray-500" />
            </Button>
          )}
        </>
      )}
      {error && <ErrorMessage />}
    </Box>
  );
};

export default Input;
