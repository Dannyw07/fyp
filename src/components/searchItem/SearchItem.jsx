import React from "react";
import "./searchItem.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchItem = () => {
  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  return (
    <div className="div">
      <Link to="/booking">
        <div
          className="searchItem"
          // onClick={() => alert("Navigating to /booking")}
        >
          <div className="availableSlot">
            <div className="searchItemCard">
              <h1 className="siDate">7:00</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
