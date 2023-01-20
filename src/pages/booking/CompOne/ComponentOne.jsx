import React from "react";
import "./componentOne.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const ComponentOne = () => {
  return (
    <div className="componentOneContainer">
      {/* <h2>Player 1 name</h2>
      <input type="text" className="userInput" /> */}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Player1 Name" id="fullWidth" required />
      </Box>
    </div>
  );
};

export default ComponentOne;
