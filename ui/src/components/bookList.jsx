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
          .filter((book) => book.status !== 'À lire'),
      );
    });
  }, []);

  return (
    <div>
      <table className="mx-auto">
        <thead className="bg-white border-b">
          <tr>
            <th className="text-lg font-MartianMono font-bold">Titre</th>
            <th className="text-lg font-MartianMono font-bold">Auteur</th>
            <th className="text-lg font-MartianMono font-bold">Parution</th>
            <th className="text-lg font-MartianMono font-bold">Pays</th>
            <th className="text-lg font-MartianMono font-bold">Lecture</th>
            <th className="text-lg font-MartianMono font-bold">Cover</th>
            <th className="text-lg font-MartianMono font-bold">Actions</th>
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
              <td className="text-center w-24 font-MartianMono font-normal">
                {book.country}
              </td>
              <td className="text-center w-16 font-MartianMono font-normal">
                {book.reading}
              </td>
              <td className="w-28">
                <img src={book.cover} alt="" className="h-32 mx-auto" />
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
  );
}

export default BookList;
