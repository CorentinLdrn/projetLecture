/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const [bookList, setBookList] = useState([]);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(
        allBooks.data
          .filter((book) => book.user === localStorage.getItem('userId'))
          .filter((book) => book.status === 'Lu'),
      );
    });
  }, []);

  return (
    <div>
      <table className="mx-auto my-8">
        <thead className="bg-white border-b">
          <tr>
            <th className="text-lg font-MartianMono font-bold">Titre</th>
            <th className="text-lg font-MartianMono font-bold">Auteur</th>
            <th className="text-lg font-MartianMono font-bold">Parution</th>
            <th className="text-lg font-MartianMono font-bold hidden sm:table-cell">
              Pays
            </th>
            <th className="text-lg font-MartianMono font-bold hidden sm:table-cell">
              Lecture
            </th>
            <th className="text-lg font-MartianMono font-bold hidden md:table-cell">
              Cover
            </th>
            <th className="text-lg font-MartianMono font-bold hidden md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr
              className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
              key={book.id}
            >
              <td className="text-center w-72 font-MartianMono font-normal">
                {book.title}
              </td>
              <td className="text-center w-56 font-MartianMono font-normal">
                {book.author}
              </td>
              <td className="text-center w-16 font-MartianMono font-normal">
                {book.parution}
              </td>
              <td className="text-center w-24 font-MartianMono font-normal hidden sm:table-cell">
                {book.country}
              </td>
              <td className="text-center w-16 font-MartianMono font-normal hidden sm:table-cell">
                {book.reading}
              </td>
              <td className="w-28 hidden md:table-cell">
                <img src={book.cover} alt="" className="h-32 mx-auto" />
              </td>
              <td className="w-48 text-center hidden md:table-cell">
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
  );
}

export default BookList;
