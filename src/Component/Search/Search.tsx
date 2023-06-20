import React from "react";
import { InputElement } from "../Form/Input/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Search = ({ placeholder = "search" }) => {
  return (
    <div className="relative ">
      <MagnifyingGlassIcon className="h-7 w-7 absolute right-2 top-2 text-gray-500 " />
      <InputElement type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
