



function Search(){

    return (
        <div className="searchbar">
          <label htmlFor="search">Search Shops:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type a shop name or location to search..."
            />
        </div>
      );
}

export default Search;