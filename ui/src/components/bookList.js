import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((allBooks) => {
      setBookList(
        allBooks.data.filter((book) => {
          return book.status !== "À lire";
        })
      );
    });
  }, []);

  return (
    <>
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
          {bookList.map((book, key) => (
            <tr key={key}>
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
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to={`/edit/${book._id}`}>Edit</Link>
                </button>

                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
