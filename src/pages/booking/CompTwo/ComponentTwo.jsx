import React from "react";
import "./compTwo.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const ComponentTwo = () => {
  return (
    <div className="componentTwoContainer">
      {/* <div className="player1">
        <h2>Player 1 name</h2>
        <input type="text" className="userInput" />
      </div>
      <div className="player2">
        <h2>Player 2 name</h2>
        <input type="text" className="userInput" />
      </div> */}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Player1 Name" id="fullWidth" required />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Player2 Name" id="fullWidth" required />
      </Box>
    </div>
  );
};

export default ComponentTwo;
