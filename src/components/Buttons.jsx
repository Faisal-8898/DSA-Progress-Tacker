import { Button } from "@mui/material";
import React, { useState } from "react";
import TitleInput from "./TitleInput"; // Import the TitleInput component
import Row from "./addRow";

export const MultiButton = () => {
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [titles, setTitles] = useState([]); // State to store saved titles
  const [editedTitle, setEditedTitle] = useState(titles);

  const [showRow, setshowRow] = useState(false);
  const [roows, setRows] = useState([]); // State to store saved titles

  const handleSaveRow = (newRow) => {
    setRows([...roows, newRow]);
    console.log(roows);
    setshowRow(false); // Hide the TitleInput component after saving
  };

  const handleSaveTitle = (newTitle) => {
    setTitles([
      ...titles,
      { title: newTitle, isSelected: false, isEditing: false },
    ]);
    setShowTitleInput(false); // Hide the TitleInput component after saving
  };

  const handleTitleClick = (index) => {
    // Toggle the selected state of the clicked title
    const updatedTitles = [...titles];
    updatedTitles[index].isSelected = !updatedTitles[index].isSelected;
    setTitles(updatedTitles);
  };

  const handleDeleteSelected = () => {
    // Filter out the selected titles and update the state
    const updatedTitles = titles.filter((title) => !title.isSelected);
    setTitles(updatedTitles);
  };

  const handleTitleDoubleClick = (index) => {
    // Enable editing mode for the double-clicked title
    const updatedTitles = [...titles];
    updatedTitles[index].isEditing = true;
    setTitles(updatedTitles);
  };

  const handleEditTitleChange = (index, updatedTitle) => {
    // Update the edited title
    const updatedTitles = [...titles];
    updatedTitles[index].title = updatedTitle;
    updatedTitles[index].isEditing = false; // Disable editing mode
    setTitles(updatedTitles);
  };

  return (
    <>
      <div className="allButtons">
        <div className="leftbtn">
          <Button
            className="addTitle"
            variant="contained"
            onClick={() => setShowTitleInput(!showTitleInput)} // Toggle the TitleInput component
          >
            Add a Title
          </Button>

          <Button
            className="addRow"
            variant="contained"
            onClick={() => setshowRow(!showRow)}
          >
            Add a Row
          </Button>
        </div>

        <div className="Container">
          <ul className="titleBox">
            {showTitleInput && <TitleInput onSaveTitle={handleSaveTitle} />}
            {showRow && <Row onAddRow={handleSaveRow} />}

            {titles.map((title, index) => (
              <li
                key={index}
                onDoubleClick={() => handleTitleDoubleClick(index)} // Enable editing on double-click
              >
                {title.isEditing ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEditTitleChange(index, editedTitle);
                      }
                    }}
                  />
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={title.isSelected}
                      onChange={() => handleTitleClick(index)}
                    />
                    {title.title}
                    {roows}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="rowContainer">
            <ul className="rowBox">
              {roows.map((row, index) => (
                <li key={index}>
                  <input type="checkbox" />
                  <span>Name: {row.name}</span>
                  <span>Link: {row.link}</span>
                  <span>Done: {row.isDone ? "Yes" : "No"}</span>
                  <span>
                    Needs Revision: {row.needsRevision ? "Yes" : "No"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rightbtn">
          <Button
            className="deleteRow"
            variant="contained"
            color="error"
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </Button>
        </div>
      </div>
    </>
  );
};
