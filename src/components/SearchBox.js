import { React, useEffect, useState } from "react";
import "../styles/searchbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBox(props) {
  // State to manage the search input value
  const [searchVal, setSearchVal] = useState("");

  // Create a shallow copy of the data passed in props
  const copiedData = [...props.data];

  // Handle input changes in the search input field
  const handleInput = (e) => {
    setSearchVal(e.target.value);
    handleSearch(e.target.value);
  };

  // Clear the search input field
  const handleClearBtn = () => {
    setSearchVal("");
  };

  // Handle the search operation
  const handleSearch = (value) => {
    // Filter the data based on the search query
    const matchingObjects = filterObjectsByKeywords(copiedData, value);

    // Update the order list with matching objects
    if (matchingObjects.length > 0) {
      // props.setOrderList(matchingObjects);
    }
  };

  // Function to filter objects based on search keywords
  function filterObjectsByKeywords(orders, searchQuery) {
    // Shallow copy of the "orders" array
    const copiedOrders = [...orders];

    // Split searchQuery into keywords
    const keywords = searchQuery.toLowerCase().split(" ");

    // Use filter method to find objects containing any of the keywords
    const filteredOrders = copiedOrders.filter((order) => {
      const orderName = order.name.toLowerCase();
      return keywords.some((keyword) => orderName.includes(keyword));
    });

    return filteredOrders;
  }

  return (
    <div className="container-searchbox">
      <div className="input-wrap">
        <label htmlFor="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search...."
        />

        <FontAwesomeIcon icon={faSearch} style={{ color: "#b0b0b0" }} />
      </div>
    </div>
  );
}

export default SearchBox;
