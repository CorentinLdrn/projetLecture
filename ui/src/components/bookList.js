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
      setBookList(allBooks.data);
    });
  }, []);

  return (
    <>
      <Link to={"/book"}>Add a book</Link> <br></br>
      <Link to={"/"}>Home</Link> <br></br>
      <Link to={"/stats"}>Statistics</Link>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Parution</th>
            <th>Country</th>
            <th>genre</th>
            <th>moviment</th>
            <th>reading</th>
            <th>cover</th>
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
              <td>{book.genre}</td>
              <td>{book.moviment}</td>
              <td>{book.reading}</td>
              <td>
                <img src={book.cover} alt="" className="h-28" />
              </td>
              <td>
                <Link to={`/edit/${book._id}`}>Edit</Link>
              </td>
              <td onClick={() => deleteBook(book._id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
