import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop smooth top="1000" />
      <Header />

      <div className="homeContainer">
        <h1 className="homeTitle">Featured Golf Course</h1>
        <Featured />
        <h1 className="homeTitle">Facilities</h1>
        <h1 className="homeTitle">News</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
