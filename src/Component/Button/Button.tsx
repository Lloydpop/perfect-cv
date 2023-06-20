import { Box, Button } from "@chakra-ui/react";
import classnames from "classnames";
import React from "react";
import { CircleLoader } from "react-spinners";
interface ButtonProps {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  variant?: string;
  disabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
}

const ButtonElement = ({
  children,
  type = "button",
  variant = "primary",
  disabled,
  onClick,
  isFullWidth,
  isLoading,
}: ButtonProps) => {
  return (
    <Box as="div">
      <Button
        className={classnames(
          `flex justify-center rounded-md border border-transparent py-2 px-4 text-sm items-center
          font-medium shadow-sm 
          disabled:cursor-not-allowed`,
          {
            "bg-white text-black border-2": variant === "primary",
            "bg-blue-600 text-white border-indigo border-2":
              variant === "secondary",
            "bg-red-600 text-white hover:bg-red-500": variant === "danger",
            "bg-green-600 text-white hover:bg-green-500": variant === "success",
            "bg-transparent text-gray-500 !border-gray-300 hover:bg-gray-50":
              variant === "outline",
            "bg-gray-700 text-white": variant === "black",
            "bg-transparent !border-0 shadow-none": variant === "transparent",
            "w-full": isFullWidth,
          }
        )}
        _hover={{
          bg: variant,
        }}
        bg={variant}
        type={type}
        onClick={onClick}
        disabled={isLoading === true ? disabled : disabled}
        border={variant === "primary" ? "1px solid #D3D3D3" : ""}
      >
        {disabled ? <CircleLoader size={25} color={"#fff"} /> : children}
      </Button>
    </Box>
  );
};

export default ButtonElement;
