import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function TitleInput({ onSaveTitle }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveTitle = () => {
    onSaveTitle(title);
    setTitle(""); // Clear the input field
  };

  return (
    <div>
      <TextField
        id="filled-basic"
        label="TOPIC NAME"
        variant="filled"
        value={title}
        onChange={handleTitleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSaveTitle();
          }
        }}
      />
    </div>
  );
}

export default TitleInput;
