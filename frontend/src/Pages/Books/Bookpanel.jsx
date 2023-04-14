import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Book.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../store/Slices";
import { useDispatch } from "react-redux";
export default function BookPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [numOfPages, setNumOfPages] = useState(0);
  const [publishedAt, setPublishedAt] = useState(new Date());
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const book = {
      title: bookName,
      author: authorName,
      no_of_pages: numOfPages,
      published_at: publishedAt,
    };
    dispatch(createBook(book));
    handleClose();
  };
  const innerStyle = { padding: "18px", width: "80%", marginLeft: "13px" };
  return (
    <div className="main">
      <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center" }}>
        <h1 >BXtrack Library</h1>
        <div style={{ display: "flex", gap: "6px"}}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            style={{ marginTop: "120px", backgroundColor: "red" }}
          >
            Add Books
          </Button>
          <Button
            onClick={() => navigate("/ViewBooks")}
            variant="contained"
            style={{ marginTop: "120px" }}
          >
            View Books
          </Button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ width: "400px", textAlign: "center" }}>
          Add books
        </DialogTitle>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Book name"
          type="text"
          fullWidth
          variant="standard"
          style={innerStyle}
          onChange={(e) => setBookName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Author name"
          type="text"
          fullWidth
          variant="standard"
          style={innerStyle}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="No of pages"
          type="text"
          fullWidth
          variant="standard"
          style={innerStyle}
          onChange={(e) => setNumOfPages(e.target.value)}
        />
        <label style={innerStyle}>Published at</label>
        <input
          onChange={(e) => setPublishedAt(e.target.value)}
          label="Date"
          type="date"
          style={innerStyle}
        />

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
