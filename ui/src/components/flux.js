import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Flux = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>
          Livre actuel :{" "}
          {bookList.map((book) =>
            book.status === "En cours" ? book.title : null
          )}
        </h1>
      </div>
    </div>
  );
};

export default Flux;
