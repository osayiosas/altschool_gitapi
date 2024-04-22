import React, { useState } from "react";
import SearchInput from "./SearchInput";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        // `https://api.github.com/search/repositories?q=${query}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.items); // Assuming the response contains an array of items
      } else {
        console.error("Failed to fetch search results:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <SearchInput onSearch={handleSearch} />
      {/* Display search results */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <a href={result.html_url} target="_blank" rel="noopener noreferrer">
              {result.full_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
