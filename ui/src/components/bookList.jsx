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
      setBookList(allBooks.data.filter((book) => book.status !== 'À lire'));
    });
  }, []);

  return (
    <table className="mx-auto">
      <thead className="bg-white border-b">
        <tr>
          <th className="text-lg ">Titre</th>
          <th className="text-lg ">Auteur</th>
          <th className="text-lg ">Parution</th>
          <th className="text-lg ">Pays</th>
          <th className="text-lg ">Lecture</th>
          <th className="text-lg ">Couverture</th>
          <th className="text-lg ">Statut</th>
          <th className="text-lg ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookList.map((book) => (
          <tr
            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
            key={book.id}
          >
            <td className="text-center w-72">{book.title}</td>
            <td className="text-center w-56">{book.author}</td>
            <td className="text-center w-16">{book.parution}</td>
            <td className="text-center w-24">{book.country}</td>
            <td className="text-center w-16">{book.reading}</td>
            <td className="w-28">
              <img src={book.cover} alt="" className="h-32 mx-auto" />
            </td>
            <td className="text-center">{book.status}</td>

            <td className="w-48 text-center">
              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <Link to={`/edit/${book.id}`}>Edit</Link>
              </button>

              <button
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
