import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./booking.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ComponentOne from "./CompOne/ComponentOne";
import ComponentTwo from "./CompTwo/ComponentTwo";
import ComponentThree from "./CompThree/ComponentThree";
import ComponentFour from "./CompFour/ComponentFour";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const [player, setPlayer] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setPlayer(event.target.value);
    console.log(event.target.value);
  };
  const handleSearch = () => {
    navigate("/bookingConfirmation");
  };

  return (
    <div>
      <Navbar />
      <div className="bookingContainer">
        <div className="bookingWrapper">
          <div className="mainComponent">
            <div className="bookingTitle">
              <h1>Booking Information</h1>
            </div>

            <div className="userInputtedInfo">
              <h1>Date Selected : 2023-1-19</h1>
              <h1>Time Selected : 7:00 AM</h1>
            </div>

            <div className="choosePlayer">
              <h2>Select Players</h2>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    Players
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={player}
                    label="Player *"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Box>
              <div className="component">
                <div className="selectPlayerComponent">
                  {player == "1" ? <ComponentOne /> : ""}
                  {player == "2" ? <ComponentTwo /> : ""}
                  {player == "3" ? <ComponentThree /> : ""}
                  {player == "4" ? <ComponentFour /> : ""}
                </div>
              </div>
            </div>
            <div className="btn">
              <button onClick={handleSearch}>Proceed</button>
            </div>
          </div>
          <div className="sideComponent">
            <h1>news components</h1>
            <h2>To be added ASAP</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
