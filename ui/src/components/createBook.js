import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    parution: "",
    country: "",
    genre: "",
    moviment: "",
    reading: "",
    cover: "",
    status: "",
  });

  const createBook = () => {
    axios.post("http://localhost:5000/books", book).then(() => {
      window.alert("Successfully Registered");
      window.location.reload(false);
    });
  };

  return (
    <>
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

        <label>
          Status:
          <select
            value={book.status}
            onChange={(e) => setBook({ ...book, status: e.target.value })}
          >
            <option value="Lu">Lu</option>
            <option value="En cours">En cours</option>
            <option value="À lire">À lire</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CreateBook;
