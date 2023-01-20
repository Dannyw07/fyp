import React, { useState, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleUser,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./golfclub.css";
import ImageViewer from "react-simple-image-viewer";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { utils } from "react-modern-calendar-datepicker";
import { useNavigate } from "react-router-dom";

// import DatePicker from "react-modern-calendar-datepicker";

const Golfclub = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/164250/pexels-photo-164250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/274262/pexels-photo-274262.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/274262/pexels-photo-274262.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/274262/pexels-photo-274262.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("list");
  const navigate = useNavigate();

  //Navigate us to lists of glub club when we select search button
  //need to work on the Select Date
  const handleSearch = () => {
    navigate("/availableTime", { state: { selectedDay, selectedTime } });
  };

  return (
    <div>
      <Navbar />
      <ScrollToTop smooth top="1000" />
      <div className="golfclubContainer">
        <div className="golfclubWrapper">
          <div className="golfclubTitle">Tenom Golf Club</div>
          <div className="golfclubAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Jalan Hotel Perkasa Peti Surat 100 89907 Tenom Sabah, Malaysia
            </span>
          </div>
          <span className="golfclubDistance">
            Excellent location - 500m from center
          </span>
          <span className="golfclubPriceHighlight">
            Reserva a golf course over RM250 at this property
          </span>
          <div className="golfclubImages">
            {photos.map((photo, index) => (
              <div className="golfclubImgWrapper">
                <img
                  /*src={photo.src}*/
                  src={photo.src}
                  className="golfclubImg"
                  alt=""
                  key={index}
                  onClick={() => openImageViewer(index)}
                />

                {isViewerOpen && (
                  <ImageViewer
                    src={photos}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="golfclubDetails">
            <div className="golfclubDetailsText">
              <h1 className="golfclubTitle">Stay in the heart of Tenom</h1>
              <p>
                On projection apartments unsatiable so if he entreaties
                appearance. Rose you wife how set lady half wish. Hard sing an
                in true felt. Welcomed stronger if steepest ecstatic an suitable
                finished of oh. Entered at excited at forming between so
                produce. Chicken unknown besides attacks gay compact out you.
                Continuing no simplicity no favourable on reasonably melancholy
                estimating. Own hence views two ask right whole ten seems. What
                near kept met call old west dine. Our announcing sufficient why
                pianoforte.
              </p>
            </div>
          </div>
          <div className="golfclubDetailsPrice">
            <h1>Perfect for Golfers</h1>
            <span>
              Located in the real heart of Tenom, this golf course has an
              excellent location score of 9.8
            </span>
            <h2>
              <b>RM250</b>(1 golfer(s))
            </h2>
            {/* <button>Reserve Now!</button> */}

            <h3>Availability</h3>
            {/* Select Date */}
            <div className="searchContainer">
              <div className="searchItem">
                <div className="selectDate">
                  <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    inputPlaceholder="Select a day"
                    shouldHighlightWeekends
                    minimumDate={utils().getToday()}
                    inputClassName="Datepicker"
                  />
                  {/* <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  /> */}
                </div>
              </div>
              <div className="searchItem">
                <div className="selectItem">
                  <input
                    list="data"
                    placeholder="Select a Time"
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <datalist id="data">
                    <option value="AM" />
                    <option value="PM" />
                  </datalist>
                </div>
              </div>
              <div className="searchItem">
                <button className="searchButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="golfclubRating">
            <div className="rating">
              <h1>Rating from customers</h1>
            </div>
            <div className="rating-2">
              {/*First user */}
              <div className="user1">
                <div className="user">
                  <div className="user1-detail">
                    <div className="userIcon">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>

                    <h1>JohnDoe</h1>
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="date">
                    <h1>2022-02-26 12:07</h1>
                  </div>
                  <div className="desc">
                    <p>Very recommended!</p>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              {/*Second user */}
              <div className="user2">
                <div className="user">
                  <div className="user1-detail">
                    <div className="userIcon">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                    <h1>Danny Wong</h1>
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="date">
                    <h1>2022-12-26 10:50</h1>
                  </div>
                  <div className="desc">
                    <p>The golf location is good~</p>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              {/*Third user */}
              <div className="user3">
                <div className="user">
                  <div className="user1-detail">
                    <div className="userIcon">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                    <h1>Michealangelo</h1>
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="date">
                    <h1>2022-12-28 23:40</h1>
                  </div>
                  <div className="desc">
                    <p>The scenary is magnificent~</p>
                  </div>
                  <div className="like">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Golfclub;
