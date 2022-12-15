import React, { useState } from 'react';
import axios from 'axios';

function CreateBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    parution: '',
    country: '',
    genre: '',
    moviment: '',
    reading: '',
    cover: '',
    status: '',
  });

  const createBook = () => {
    axios.post('http://localhost:5000/books', book).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <h2 className="pt-12 mb-6 font-bold font-MartianMono text-lg">
        Ajouter un nouveau livre:
      </h2>
      <form onSubmit={createBook} className="flex flex-col gap-4">
        <label htmlFor="title">
          Titre *:
          <input
            className="min-w-[60vh]"
            id="title"
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </label>

        <label htmlFor="author">
          Auteur *:
          <input
            className="min-w-[60vh]"
            id="author"
            placeholder="Nom Prénom"
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </label>

        <label htmlFor="parution">
          Parution *:
          <input
            className="min-w-[60vh]"
            id="parution"
            placeholder="Année de parution"
            type="text"
            value={book.parution}
            onChange={(e) => setBook({ ...book, parution: e.target.value })}
          />
        </label>

        <label htmlFor="country">
          Pays *:
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
          Genre :
          <input
            className="min-w-[60vh]"
            id="genre"
            type="text"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </label>

        <label htmlFor="moviment">
          Mouvement :
          <input
            className="min-w-[60vh]"
            id="moviment"
            type="text"
            value={book.moviment}
            onChange={(e) => setBook({ ...book, moviment: e.target.value })}
          />
        </label>
        */}

        <label htmlFor="cover">
          Cover :
          <input
            className="min-w-[60vh]"
            id="cover"
            placeholder="Lien"
            type="text"
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value })}
          />
        </label>
        <label htmlFor="status">
          Statut *:
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
            Lecture :
            <input
              className="min-w-[60vh]"
              id="reading"
              placeholder="Année de lecture"
              type="text"
              value={book.reading}
              onChange={(e) => setBook({ ...book, reading: e.target.value })}
            />
          </label>
        ) : null}
        <input
          className="text-start bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-w-[10vh] ml-[30vh]"
          type="submit"
          value="Ajouter"
        />
      </form>
    </>
  );
}

export default CreateBook;
