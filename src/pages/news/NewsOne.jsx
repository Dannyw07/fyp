import React from "react";

import Login from "../login/Login";
import Logout from "../../components/Logout/Logout";
import { useSelector } from "react-redux";

import { selectUser } from "../../features/userSlice";

//this is logout page
// to be change
const NewsOne = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout /> : <Login />}
      {/* <Navbar />
      <div className="myAccountContainer"></div> */}
    </div>
  );
};

export default NewsOne;
