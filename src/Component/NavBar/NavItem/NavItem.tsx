import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { navData } from "../NavData";
import { NavLink } from "react-router-dom";

interface NavLinkProps {
  close?: () => void;
}
const NavItem = ({ close }: NavLinkProps) => {
  return (
    <Box>
      {navData?.map((item) => (
        <NavLink
          onClick={close}
          style={{
            fontWeight: "500",
            padding: "10px",
            display: "flex",
            marginTop: "36px",
            width: "190px",
            borderRadius: "10px",
            gap: "10px",
          }}
          to={item.href}
          className={({ isActive }) =>
            isActive ? "bg-slate-200 text-black" : "text-gray-500"
          }
        >
          <item.icon
            className={`w-6 h-6 ${item.color ? item?.color : "text-gray-500"}`}
          />
          <span>
            {" "}
            {item.name === "Invite Members" ? (
              <div className="">
                {item.name} <hr className="mt-5 absolute" />
              </div>
            ) : (
              item.name
            )}
          </span>
        </NavLink>
      ))}
    </Box>
  );
};

export default NavItem;
