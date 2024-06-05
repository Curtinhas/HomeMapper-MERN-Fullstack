import "./searchBar.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="MinPrice"
          min={0}
          max={10000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="MaxPrice"
          min={0}
          max={10000}
          placeholder="Max Price"
        />
        <button>
          <Link to="/list">
            <img src="/search.png" alt="" />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
