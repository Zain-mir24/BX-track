import React, { useEffect } from "react";
import BookCard from "../../components/BookCard/index";
import { fetchBooks, selectBooksState } from "../../store/Slices";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ViewBook() {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const books = useSelector((state) => state.books.books);
  const status = useSelector(selectBooksState);

  return (
    <div className="main">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button 
         onClick={()=>navigate("/")}
         variant="contained"
         style={{ marginTop: "120px", backgroundColor: "red" }}>
            Go back
        </Button>
        <h1>BXTrack Library panel</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "13px",
            flexWrap: "wrap",
          }}
        >
          {books.length !== 0 &&
            books.map((index, i) => {
              return <BookCard key={index.id} books={index} />;
            })}
        </div>
      </div>
      {status === "loading" && <p>Loading</p>}
    </div>
  );
}

export default ViewBook;
