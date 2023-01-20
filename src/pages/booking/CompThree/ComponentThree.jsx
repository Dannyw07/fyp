import React from "react";
import "./componentThree.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function ComponentThree() {
  return (
    <div>
      <div className="componentThreeContainer">
        {/* <div className="player1">
          <h2>Player 1 name</h2>
          <input type="text" className="userInput" />
        </div>
        <div className="player2">
          <h2>Player 2 name</h2>
          <input type="text" className="userInput" />
        </div>
        <div className="player3">
          <h2>Player 3 name</h2>
          <input type="text" className="userInput" />
        </div> */}
        {/* Player 1 Name Input */}
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Player1 Name" id="fullWidth" required />
        </Box>
        {/* Player 2 Name Input */}
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Player2 Name" id="fullWidth" required />
        </Box>
        {/* Player 3 Name Input */}
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Player3 Name" id="fullWidth" required />
        </Box>
      </div>
    </div>
  );
}
