import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditBook() {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then((thisBook) => {
      setBook(thisBook.data);
    });
  }, [id]);

  const updateBook = () => {
    axios.patch(`http://localhost:5000/books/${id}`, book).then((thisBook) => {
      setBook(thisBook.data);
    });
  };
  return (
    <>
      <h2>Update Book Details</h2>

      <form onSubmit={updateBook}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            value={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          />
        </label>

        <label htmlFor="author">
          Author:
          <input
            id="author"
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </label>

        <label htmlFor="parution">
          Parution:
          <input
            id="parution"
            type="text"
            value={book.parution}
            onChange={(e) => setBook({ ...book, parution: e.target.value })}
          />
        </label>

        <label htmlFor="country">
          Country:
          <input
            id="country"
            type="text"
            value={book.country}
            onChange={(e) => setBook({ ...book, country: e.target.value })}
          />
        </label>

        <label htmlFor="genre">
          Genre:
          <input
            id="genre"
            type="text"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </label>

        <label htmlFor="moviment">
          Moviment:
          <input
            id="moviment"
            type="text"
            value={book.moviment}
            onChange={(e) => setBook({ ...book, moviment: e.target.value })}
          />
        </label>

        <label htmlFor="reading">
          Reading:
          <input
            id="reading"
            type="text"
            value={book.reading}
            onChange={(e) => setBook({ ...book, reading: e.target.value })}
          />
        </label>

        <label htmlFor="cover">
          Cover:
          <input
            id="cover"
            type="text"
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value })}
          />
        </label>

        <label htmlFor="status">
          Status:
          <select
            id="status"
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
}

export default EditBook;
