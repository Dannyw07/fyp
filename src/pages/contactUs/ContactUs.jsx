import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contactUs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { firstName, lastName, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:4000/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");

    toast.success("Message Sent", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      theme: "dark",
    });
    // let result = await response.json();
    // alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Navbar />
        <div className="contactUsContainer">
          <div className="contactUsForm">
            {/* First Name */}
            <div>
              <label htmlFor="name">First Name:</label>
              <input type="text" id="firstName" required />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="name">Last Name:</label>
              <input type="text" id="lastName" required />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>

            {/* message */}
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
          </div>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default ContactUs;
