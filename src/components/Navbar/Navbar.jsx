import React, { useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

//import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/golfclub/:id">Course</Link>
          <Link to="/booking">Booking</Link>
          {/*<a href="/golfclub">Golfclub</a>*/}
          {/*<Link to="/review">Review</Link>*/}
          {/*<a href="/review">Review</a>*/}
          <Link to="/news">News</Link>
          {/*<a href="/news">Our news</a>*/}
          <Link to="/contactUs">Contact Us</Link>
          {/*<a href="/contactUs">Contact Us</a>*/}
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {/* <ReorderIcon />*/}
          Open
        </button>
      </div>
      <div className="rightSide">
        <div className="links-2">
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Create an account</Link>
          <Link to="/myAccount">My Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
