import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then((book) => {
      setBook(book.data);
    });
  }, [id]);

  const updateBook = () => {
    axios.patch(`http://localhost:5000/books/${id}`, book).then((book) => {
      setBook(book.data);
      window.alert("Successfully Edited");
    });
  };
  return (
    <>
      <h2>Update Book Details</h2>

      <form onSubmit={updateBook}>
        <label>
          Title:
          <input
            type="text"
            value={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          />
        </label>

        <label>
          Autjor:
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
          Genre:
          <input
            type="text"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </label>

        <label>
          Moviment:
          <input
            type="text"
            value={book.moviment}
            onChange={(e) => setBook({ ...book, moviment: e.target.value })}
          />
        </label>

        <label>
          Reading:
          <input
            type="text"
            value={book.reading}
            onChange={(e) => setBook({ ...book, reading: e.target.value })}
          />
        </label>

        <label>
          Cover:
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

export default EditBook;
