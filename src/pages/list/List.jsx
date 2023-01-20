import React from "react";
import "./list.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const List = () => {
  // to see the set destination and play date
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);

  const [selectedDay, setselectedDay] = useState(location.state.selectedDay);
  return (
    <div>
      <Navbar />
      <ScrollToTop smooth top="1000" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Play-date</label>
              <span></span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price</span>
                  <input type="number" className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="lsResult">
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
