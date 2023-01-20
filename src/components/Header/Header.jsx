import React from "react";
// import {useState, useEffect } from "react";
import "./header.css";
import background from "./golfcourse.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCalendarDays,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
//import DatePicker from "react-modern-calendar-datepicker";
// import { utils } from "react-modern-calendar-datepicker";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

// import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
// import { useNavigate } from "react-router-dom";

export const Header = () => {
  //default value of the datepicker
  // const defaultValue = {
  //   year: 2022,
  //   month: 12,
  //   day: 23,
  // };

  // const [destination, setDestination] = useState("");

  // const navigate = useNavigate();

  //const [selectedDay, setSelectedDay] = useState(null);
  // const [selectedDay, setSelectedDay] = useState(null);

  //validate date
  /*
  const validateField = (value?: string) => {
    if (!value) {
      return "REQUIRED";
    }
  };
*/
  //Navigate us to lists of glub club when we select search button
  // const handleSearch = () => {
  //   navigate("/golfclubs", { state: { destination, selectedDay } });
  // };

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src="golfcourse.jpg" alt="Container" className="my-image" />
      {/* <div className="headerSearch">
        
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
          <input
            type="text"
            placeholder="Where are you going? "
            className="headerSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchDate">Date</span>

          {
            <DatePicker
              inputPlaceholder="Select a date"
              value={selectedDay}
              onChange={setSelectedDay}
              
              shouldHighlightWeekends
              inputClassName="date"
              minimumDate={utils().getToday()}

          
            />
          }
        </div>
        
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
