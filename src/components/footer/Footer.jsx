import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerSection">
          <div className="listLeftSide">
            <div className="list">
              <div className="fLists">
                <div className="fList">
                  <li className="fheader">Golf</li>
                  <li className="fListItem">Hole-by-Hole</li>
                  <li className="fListItem">Rates & Reservatons</li>
                  <li className="fListItem">Highlights</li>
                  <li className="fListItem">Rules</li>
                  <li className="fListItem">Booking Information</li>
                </div>

                <div className="fList">
                  <li className="fheader">Membership</li>
                  <li className="fListItem">Membership</li>
                  <li className="fListItem">Benefits</li>
                  <li className="fListItem">Club by-Laws</li>
                  <li className="fListItem">Club Rules & Regulations</li>
                </div>

                <div className="fList">
                  <li className="fheader">About Us</li>
                  <li className="fListItem">Gallery</li>
                  <li className="fListItem">Hotel Offer</li>
                  <li className="fListItem">Press Release</li>
                  <li className="fListItem">Facilities</li>
                </div>
              </div>
            </div>
          </div>
          <div className="listRightSide">
            <div className="mailistContent">
              <form>
                <h1>Join Our Newsletter</h1>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married his account removal.
                </p>
                <div className="emailBox">
                  <FontAwesomeIcon icon={faEnvelope} />

                  <input
                    type="email"
                    name=""
                    value=""
                    placeholder="Please enter your mail"
                    className="emailInput"
                  />
                  <button type="button" className="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="fText">Copyright @ 2022 Danny Wong Jia Hong</div>
      </div>
    </div>
  );
};

export default Footer;
