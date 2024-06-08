import React, { useState } from "react";

const SearchBar = (props) => {
  const { onSetCity } = props;
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onClickHandler = () => {
    setSearchValue(inputValue);
    setInputValue("");
  };

  console.log(searchValue);

  return (
    <div className="container relative col-span-3 row-span-1 row-start-4 mt-[3rem] flex min-w-[50%] items-center pl-[2rem] pt-[3rem]">
      <input
        value={inputValue}
        type="text"
        placeholder="Search for a city"
        className="relative w-full rounded-[10px] p-[10px] pr-[12px] text-[0.9rem]"
        onChange={onChangeHandler}
      />
      <button
        className=" absolute right-[2px] rounded-[10px] bg-[#5d4dde] px-[20px] py-[7px] text-[0.9rem] text-[#fff]"
        onClick={onClickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
