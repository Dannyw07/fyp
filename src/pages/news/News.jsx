import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./news.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const News = () => {
  const [listOfNews, setListOfNews] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/news").then((response) => {
      setListOfNews(response.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="topBar">
        <h1>LATEST GOLF NEWS</h1>
        <Stack spacing={2}>
          <Pagination count={5} shape="rounded" color="primary" />
          {/* <Pagination count={5} variant="outlined" shape="rounded" /> */}
        </Stack>
        <div className="newsContainer">
          <div className="articleOne">
            <img
              src="https://www.golfchannel.com/sites/default/files/2023/01/10/Hoge_1920_Sentry22_TCU.jpg"
              alt=""
              className="Img"
            />
            <div className="Desc">
              <h1 className="Title">
                How Harman taunted Hoge before UGA rout of TCU
              </h1>

              <div className="time">
                <p>By Admin -- JANUARY 10,2023</p>

                <FontAwesomeIcon icon={faClock} />
                <h4>19h</h4>
              </div>
            </div>
            {/* <div className="siDetails">
            <div className="siDetailTexts">
              <Link to="/golfclub">
                <button className="siButton">Read More</button>
              </Link>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
