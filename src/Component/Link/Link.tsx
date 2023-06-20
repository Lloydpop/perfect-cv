import { Box } from "@chakra-ui/react";
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
interface NavLinkProps {
  href: string;
  bg?: string;
  name?: string;
  variant?: string;
}
export const NavLink = ({
  href,
  bg,
  name,
  variant = "secondary",
}: NavLinkProps) => {
  return (
    <Box
      as="div"
      backgroundColor={bg}
      fontSize={variant === "primary" ? 14 : 15}
      fontWeight={"bold"}
      className={classnames(
        `flex justify-center  py-2 px-4 text-sm items-center
      font-medium  
      disabled:cursor-not-allowed`,
        {
          "text-blue-600 underline": variant === "primary",
          " text-blue-600 font-medium": variant === "secondary",
          "bg-red-600 text-white hover:bg-red-500": variant === "danger",
          "bg-green-600 text-white hover:bg-green-500": variant === "success",
          "text-white font-medium": variant === "outline",
          "bg-gray-700 text-white": variant === "black",
          "bg-transparent !border-0 shadow-none": variant === "transparent",
        }
      )}
    >
      <Link to={href}>{name}</Link>
    </Box>
  );
};
