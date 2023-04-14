import React, { useState, useEffect } from "react";
import image from "../../assets/Books.jpg";
import Button from "@mui/material/Button";
import moment from "moment";
import { deleteBook,  updateBook } from "../../store/Slices";
import { useDispatch } from "react-redux";
import Dialog from "../Dialog/index";
const Cardstylee = {
  height: "250px",
  border: "1px solid",
  width: "250px",
  backgroundImage: `url(${image})`,
  borderRadius: "12px",
};
function Bookcard({ books }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [numOfPages, setNumOfPages] = useState(0);
  const [publishedAt, setPublishedAt] = useState(new Date());
  useEffect(() => {
    setBookName(books.title);
    setAuthorName(books.author);
    setNumOfPages(books.no_of_pages);
    setPublishedAt(books.published_at);
  }, []);
  const updateBooks = (book) => {
    dispatch(updateBook(book));
    window.location.reload()
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const deleteBooks = (value) => {
    dispatch(deleteBook(value._id));
    window.location.reload();
  };
  const openDialog = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginBottom: "3px",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={() => openDialog()}>
          {" "}
          Edit{" "}
        </Button>
        <Button variant="contained" onClick={() => deleteBooks(books)}>
          Delete
        </Button>
      </div>
      <div style={Cardstylee}>
        <p style={{ color: "white" }}>Book name: {books.title}</p>
        <p style={{ color: "white" }}>Author name: {books.author}</p>
        <p style={{ color: "white" }}>BookName: {books.no_of_pages}</p>
        <p style={{ color: "white" }}>
          BookName: {moment(books.published_at).format("MM DD YYYY h a")}
        </p>
      </div>
      <Dialog
        open={open}
        publishedAt={publishedAt}
        books={books}
        setBookName={setBookName}
        setAuthorName={setAuthorName}
        setNumOfPages={setNumOfPages}
        setPublishedAt={setPublishedAt}
        bookName={bookName}
        numOfPages={numOfPages}
        authorName={authorName}
        updateBooks={updateBooks}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Bookcard;
