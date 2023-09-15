import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";

const Row = ({ onAddRow }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [needsRevision, setNeedsRevision] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleDoneChange = () => {
    setIsDone(!isDone);
  };

  const handleRevisionChange = () => {
    setNeedsRevision(!needsRevision);
  };

  const handleAddRow = () => {
    // Create an object to represent the row
    const newRow = {
      name,
      link,
      isSelected: false, // Added isSelected property
      isEditing: false,  // Added isEditing property
      isDone,
      needsRevision,
    };

    // Call the onAddRow function with the new row data
    onAddRow(newRow);

    // Clear the input fields and checkboxes after adding a row
    setName("");
    setLink("");
    setIsDone(false);
    setNeedsRevision(false);
  };

  return (
    <div id="rowData">
      <TextField
        id="name"
        label="Name"
        variant="filled"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="link"
        label="Link"
        variant="filled"
        value={link}
        onChange={handleLinkChange}
      />
      <FormControlLabel
        control={<Checkbox checked={isDone} onChange={handleDoneChange} />}
        label="Done"
      />
      <FormControlLabel
        control={
          <Checkbox checked={needsRevision} onChange={handleRevisionChange} />
        }
        label="Revise Needed"
      />
      <Button variant="contained" color="primary" onClick={handleAddRow}>
        Add Row
      </Button>
    </div>
  );
};

export default Row;
