import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    parution: "",
    country: "",
    genre: "",
    moviment: "",
  });

  const createBook = () => {
    axios.post("http://localhost:5000/books", book).then(() => {
      window.alert("Successfully Registered");
      window.location.reload(false);
    });
  };

  return (
    <>
      <Link to={"/bookList"}>Book List</Link>
      <form onSubmit={createBook}>
        <label>
          Title:
          <input
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </label>

        <label>
          Parution:
          <input
            type="text"
            value={book.parution}
            onChange={(e) => setBook({ ...book, parution: e.target.value })}
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            value={book.country}
            onChange={(e) => setBook({ ...book, country: e.target.value })}
          />
        </label>

        <label>
          Genre
          <input
            type="text"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </label>

        <label>
          Moviment
          <input
            type="text"
            value={book.moviment}
            onChange={(e) => setBook({ ...book, moviment: e.target.value })}
          />
        </label>

        <label>
          Reading
          <input
            type="text"
            value={book.reading}
            onChange={(e) => setBook({ ...book, reading: e.target.value })}
          />
        </label>

        <label>
          Cover
          <input
            type="text"
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value })}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CreateBook;
