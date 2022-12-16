import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditBook() {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    axios.get(`http://localhost:5000/books/${id}`).then((book) => {
      setBook(book.data);
    });
  }, [id]);

  const updateBook = () => {
    // eslint-disable-next-line no-shadow
    axios.patch(`http://localhost:5000/books/${id}`, book).then((book) => {
      setBook(book.data);
    });
  };
  return (
    <>
      <h2 className="pt-11 mb-6 font-bold font-MartianMono text-lg">
        Modifier les paramètres du livre:{' '}
      </h2>

      <form className="flex flex-col gap-4" onSubmit={updateBook}>
        <label htmlFor="title">
          Titre:
          <input
            className="min-w-[60vh]"
            id="title"
            type="text"
            value={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          />
        </label>

        <label htmlFor="author">
          Auteur:
          <input
            className="min-w-[60vh]"
            id="author"
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </label>

        <label htmlFor="parution">
          Parution:
          <input
            className="min-w-[60vh]"
            id="parution"
            type="text"
            value={book.parution}
            onChange={(e) => setBook({ ...book, parution: e.target.value })}
          />
        </label>

        <label htmlFor="country">
          Pays:
          <input
            className="min-w-[60vh]"
            id="country"
            type="text"
            value={book.country}
            onChange={(e) => setBook({ ...book, country: e.target.value })}
          />
        </label>
        {/*
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
          Mouvement:
          <input
            id="moviment"
            type="text"
            value={book.moviment}
            onChange={(e) => setBook({ ...book, moviment: e.target.value })}
          />
        </label>
          */}

        <label htmlFor="cover">
          Cover:
          <input
            className="min-w-[60vh]"
            id="cover"
            type="text"
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value })}
          />
        </label>

        <label htmlFor="status">
          Statut:
          <select
            className="min-w-[60vh]"
            id="status"
            value={book.status}
            onChange={(e) => setBook({ ...book, status: e.target.value })}
          >
            <option> </option>
            <option value="Lu">Lu</option>
            <option value="En cours">En cours</option>
            <option value="À lire">À lire</option>
          </select>
        </label>
        {book.status === 'Lu' ? (
          <label htmlFor="reading">
            Lecture:
            <input
              className="min-w-[60vh]"
              id="reading"
              type="text"
              value={book.reading}
              onChange={(e) => setBook({ ...book, reading: e.target.value })}
            />
          </label>
        ) : null}
        <input
          className="text-start bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-w-[10vh] ml-[30vh]"
          type="submit"
          value="Valider"
        />
      </form>
    </>
  );
}

export default EditBook;
