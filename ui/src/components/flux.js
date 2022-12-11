import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Flux = () => {
  const [bookList, setBookList] = useState([]);
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(allBooks.data);
    });
  }, []);

  const currentBook = "Guerre et Paix";
  return (
    <div>
      <div>
        <h1>Livre actuel : {currentBook}</h1>
        <select>
          {bookList.map((book) =>
            book.reading === 2022 ? <option>{book.title}</option> : null
          )}
        </select>
      </div>
    </div>
  );
};

export default Flux;
