import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import moment from "moment";
function index(props) {
  const innerStyle = { padding: "18px", width: "80%", marginLeft: "13px" };
  const submit = () => {
    const data = {
      id: props.books._id,
      title: props.bookName,
      author: props.authorName,
      no_of_pages: props.numOfPages,
      published_at: props.publishedAt,
    };
    props.updateBooks(data);
  };
  return (
    <div>
      {" "}
      <Dialog open={props.open} onClose={props.handleClose}>
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
          value={props.bookName}
          onChange={(e) => props.setBookName(e.target.value)}
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
          value={props.authorName}
          onChange={(e) => props.setAuthorName(e.target.value)}
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
          value={props.numOfPages}
          onChange={(e) => props.setNumOfPages(e.target.value)}
        />
        <label style={innerStyle}>Published at</label>
        <input
          value={moment(props.publishedAt).format("YYYY-MM-DD")}
          onChange={(e) => {
            props.setPublishedAt(e.target.value);
          }}
          label="Date"
          type="date"
          style={innerStyle}
        />

        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={submit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default index;
