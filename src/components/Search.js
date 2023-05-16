import React from 'react';

function Search({search, handleSearch}){

    return (
        <div className="searchbar">
          <label htmlFor="search">Search Shops:</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="Type a shop name or location to search..."
            onChange={handleSearch}
            />
        </div>
      );
}

export default Search;