import React from "react";
import Input from "./Input";
import Button from "./Button";
const SearchBar = () => {
  return (
    <div className="container relative col-span-3 row-span-1 row-start-4 mt-[3rem] flex min-w-[50%] items-center pl-[2rem]">
      <Input></Input>
      <Button></Button>
    </div>
  );
};

export default SearchBar;
