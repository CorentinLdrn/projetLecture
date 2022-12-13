import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Flux() {
  const [bookList, setBookList] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    axios.get('http://localhost:5000/books').then((allBooks) => {
      setBookList(allBooks.data);
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
        <h1>
          Livre actuel :{' '}
          {bookList.map((book) =>
            book.status === 'En cours' ? book.title : null,
          )}{' '}
          ({' '}
          {bookList
            .map((book) => book.reading)
            .reduce(
              (sum, member) => (member === currentYear ? sum + 1 : sum),
              0,
            )}
          e livre de l&apos;année en cours)
        </h1>
        <button
          type="button"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <Link to="/book">Add a book</Link>
        </button>
      </div>
      <div>
        {' '}
        <table className="mx-auto">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Parution</th>
              <th>Country</th>
              <th>reading</th>
              <th>cover</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList
              .filter((book) => book.status === 'À lire')
              .map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.parution}</td>
                  <td>{book.country}</td>
                  <td>{book.reading}</td>
                  <td>
                    <img src={book.cover} alt="" className="h-28" />
                  </td>
                  <td>{book.status}</td>

                  <td>
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
      </div>
    </div>
  );
}

export default Flux;
