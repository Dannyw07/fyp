import React, { useState } from "react";
// import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./availableTime.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";

const AvailableTime = () => {
  const location = useLocation();
  const [selectedDay, setselectedDay] = useState(location.state.selectedDay);
  const [selectedTime, setSelectedTime] = useState(location.state.selectedTime);
  console.log(location);
  return (
    <div>
      <Navbar />
      <div className="availableTime">
        <div className="availableTimeContainer">
          <div className="availableTimeWrapper">
            <div className="availableTimeSearch">
              <div className="atTitle">Search</div>
              <div className="atItem">
                <label>Date</label>
                <span></span>
              </div>
              <div className="atItem">
                <label>Time</label>
                <input placesholder={selectedTime} type="list" />
              </div>
              <button type="">Search</button>
            </div>
            <div className="availableTimeResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AvailableTime;
