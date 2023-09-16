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
  const [editedRowName, setEditedRowName] = useState("");
  const [editedRowLink, setEditedRowLink] = useState("");
  const [editedRowIsDone, setEditedRowIsDone] = useState(false);
  const [editedRowNeedRevise, setEditedNeedRevise] = useState(false);

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

  const handleRowsClick = (index) => {
    // Toggle the selected state of the clicked title
    const updatedRows = [...roows];
    updatedRows[index].isSelected = !updatedRows[index].isSelected;
    setRows(updatedRows);
  };

  const handleDeleteSelected = () => {
    // Filter out the selected titles and update the state
    const updatedTitles = titles.filter((title) => !title.isSelected);
    const updatedRows = roows.filter((row) => !row.isSelected);
    setTitles(updatedTitles);
    setRows(updatedRows);
  };

  const handleTitleDoubleClick = (index) => {
    // Enable editing mode for the double-clicked title
    const updatedTitles = [...titles];
    updatedTitles[index].isEditing = true;
    setTitles(updatedTitles);
  };

  const handleRowDoubleClick = (index) => {
    // Enable editing mode for the double-clicked title
    const updatedRows = [...roows];
    updatedRows[index].isEditing = true;
    setRows(updatedRows);
  };

  const handleEditTitleChange = (index, updatedTitle) => {
    const updatedTitles = [...titles];
    updatedTitles[index].title = updatedTitle;
    updatedTitles[index].isEditing = false; // Disable editing mode
    setTitles(updatedTitles);
  };

  const handleEditRowNameChange = (index, updatedRowName) => {
    const updatedRows = [...roows];
    updatedRows[index].name = updatedRowName;
    updatedRows[index].isEditing = false; // Disable editing mode
    setRows(updatedRows);
  };

  const handleRowLinkChange = (index, updatedRowLink) => {
    const updatedRows = [...roows];
    updatedRows[index].link = updatedRowLink;
    updatedRows[index].isEditing = false; // Disable editing mode
    setRows(updatedRows);
  };

  const handleIsDoneChange = (index) => {
    const updatedRows = [...roows];
    updatedRows[index].isDone = !updatedRows[index].isDone;
    updatedRows[index].isEditing = false; // Disable editing mode
    setRows(updatedRows);
  };

  const handleNeedsRevisionChange = (index) => {
    const updatedRows = [...roows];
    updatedRows[index].needsRevision = !updatedRows[index].needsRevision;
    updatedRows[index].isEditing = false; // Disable editing mode
    setRows(updatedRows);
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
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="rowContainer">
            <ul className="rowBox">
              {roows.map((row, index) => (
                <li
                  key={index}
                  onDoubleClick={() => handleRowDoubleClick(index)} // Enable editing on double-click
                >
                  {row.isEditing ? ( // Check if the row is in edit mode
                    <div className="rowInfo">
                      <input
                        type="checkbox"
                        checked={row.isSelected}
                        onChange={() => handleRowsClick(index)}
                      />
                      <input
                        type="text"
                        value={editedRowName}
                        onChange={(e) => setEditedRowName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleEditRowNameChange(index, editedRowName);
                          }
                        }}
                      />
                      <input
                        type="text"
                        value={editedRowLink}
                        onChange={(e) => setEditedRowLink(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleRowLinkChange(index, editedRowLink);
                          }
                        }}
                      />
                      <div>
                        Done:{" "}
                        <input
                          type="checkbox"
                          checked={row.isDone}
                          onChange={() => handleIsDoneChange(index)}
                        />
                      </div>
                      <div>
                        Needs Revision:{" "}
                        <input
                          type="checkbox"
                          checked={row.needsRevision}
                          onChange={() => handleNeedsRevisionChange(index)}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rowInfo">
                      <input
                        type="checkbox"
                        checked={row.isSelected}
                        onChange={() => handleRowsClick(index)}
                      />
                      <span>Name: {row.name}</span>
                      <span>Link: {row.link}</span>
                      <span>Done: {row.isDone ? "Yes" : "No"}</span>
                      <span>
                        Needs Revision: {row.needsRevision ? "Yes" : "No"}
                      </span>
                    </div>
                  )}
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
