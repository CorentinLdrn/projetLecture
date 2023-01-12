/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Flux() {
  const [bookList, setBookList] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(
        allBooks.data.filter(
          (book) => book.user === localStorage.getItem('userId'),
        ),
      );
    });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="flex flex-row">
          <h1 className="font-bold font-MartianMono text-lg text-white">
            Livre actuel (
            {bookList
              .map((book) => book.reading)
              .reduce(
                (sum, member) => (member === currentYear ? sum + 1 : sum),
                0,
              ) + 1}
            e de l&apos;année en cours) :
          </h1>
        </div>
        <table className="mx-auto mt-8">
          <thead className="bg-white border-b">
            <tr>
              <th className="text-lg font-MartianMono font-bold">Titre</th>
              <th className="text-lg font-MartianMono font-bold">Auteur</th>
              <th className="text-lg font-MartianMono font-bold">Parution</th>
              <th className="text-lg font-MartianMono font-bold">Pays</th>
              <th className="text-lg font-MartianMono font-bold">Cover</th>
              <th className="text-lg font-MartianMono font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList
              .filter((book) => book.status === 'En cours')
              .map((book) => (
                <tr
                  key={book.id}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
                >
                  <td className="text-center w-48 font-MartianMono font-normal">
                    {' '}
                    {book.title}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.author}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.parution}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.country}
                  </td>
                  <td className="w-24">
                    <img src={book.cover} alt="" className="h-28 mx-auto" />
                  </td>

                  <td className="w-48 text-center">
                    <button
                      type="button"
                      className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      <Link to={`/edit/${book._id}`}>Modif.</Link>
                    </button>

                    <button
                      type="button"
                      className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => deleteBook(book._id)}
                    >
                      Suppr.
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          type="button"
          className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <Link to="/book">Ajouter un livre</Link>
        </button>
        <button
          type="button"
          className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <Link to="/user">Ajouter un utilisateur</Link>
        </button>
      </div>
      <div>
        <h1 className="font-bold font-MartianMono text-lg text-white">
          Liste de lecture :
        </h1>
        <table className="mx-auto mt-8">
          <thead className="bg-white border-b">
            <tr>
              <th className="text-lg font-MartianMono font-bold">Titre</th>
              <th className="text-lg font-MartianMono font-bold">Auteur</th>
              <th className="text-lg font-MartianMono font-bold">Parution</th>
              <th className="text-lg font-MartianMono font-bold">Pays</th>
              <th className="text-lg font-MartianMono font-bold">Cover</th>
              <th className="text-lg font-MartianMono font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList
              .filter((book) => book.status === 'À lire')
              .map((book) => (
                <tr
                  key={book.id}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
                >
                  <td className="text-center w-48 font-MartianMono font-normal">
                    {' '}
                    {book.title}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.author}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.parution}
                  </td>
                  <td className="text-center font-MartianMono font-normal">
                    {book.country}
                  </td>
                  <td className="w-24">
                    <img src={book.cover} alt="" className="h-28 mx-auto" />
                  </td>

                  <td className="w-48 text-center">
                    <button
                      type="button"
                      className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      <Link to={`/edit/${book._id}`}>Modif.</Link>
                    </button>

                    <button
                      type="button"
                      className="bg-transparent hover:bg-blue-400 text-blue-400 font-bold font-MartianMono hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => deleteBook(book._id)}
                    >
                      Suppr.
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Flux;
