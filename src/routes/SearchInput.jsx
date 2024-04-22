import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Call the parent component's onSearch function with the search query
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="GitHub repositories..."
      value={searchQuery}
      onChange={handleChange}
      className=" border-2 border-gray-300 rounded-lg bg-red-50 p-2 w-full mt-2 ring-violet-200 ring-offset-2 transition-all hover:ring-2 hover:ring-offset-1 focus:ring-2 text-black focus:ring-offset-1 focus:outline-none focus:border-violet-200 sm:text-sm sm:px-2 xs:text-xs"
    />
  );
};

export default SearchInput;
