import React from "react";
import "./forgetPass.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ForgetPassword = () => {
  return (
    <div>
      <Navbar />
      <div className="forgetPassContainer">
        <div className="fPleftSide">
          <h1>Reset Your Password</h1>
        </div>
        <div className="fPrightSide">
          <h1>this is right side</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
