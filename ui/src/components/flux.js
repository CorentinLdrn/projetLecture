import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Flux = () => {
  const [bookList, setBookList] = useState([]);
  const [currentBook, setCurrentBook] = useState("Guerre et Paix");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Livre actuel : {currentBook}</h1>
        <select onChange={(e) => setCurrentBook(e.target.value)}>
          {bookList.map((book) =>
            book.reading === currentYear ? <option>{book.title}</option> : null
          )}
        </select>
      </div>
    </div>
  );
};

export default Flux;
