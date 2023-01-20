import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loGout, selectUser } from "../../features/userSlice";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./logout.css";
import Footer from "../footer/Footer";
const Logout = () => {
  let navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(loGout());
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });
    navigate("/auth/login");
  };
  return (
    <div>
      <Navbar />
      <div className="logOutContainer">
        <div className="logOutSection">
          <div className="LeftSide">
            {/* <h1>Dashboard</h1>

            <h1>Orders</h1>
            <h1>Wishlists</h1>
            // <p>Your wishlist is empty.</p> 
            <h1>Addresses</h1>
            <p>
              The following addresses will be used on the checkout page by
              default.
            </p>
            <h1>Account Details</h1> */}

            <div className="fList">
              <li className="fListItem">Dashboard</li>
              <li className="fListItem">Orders</li>
              <li className="fListItem">Wishlist</li>
              <li className="fListItem">Addresses</li>
              <li className="fListItem">Account Details</li>
            </div>

            <button
              className="logOutButton"
              onClick={(event) => handleLogout(event)}
            >
              Logout
            </button>
          </div>

          <div className="RightSide">
            <h1>
              Welcome <span className="userFirstName">{user.email}</span>
            </h1>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
            {/* <button
              className="logOutButton"
              onClick={(event) => handleLogout(event)}
            >
              Logout
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logout;
