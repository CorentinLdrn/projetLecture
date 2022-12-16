import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBook from './components/createBook';
import BookList from './components/bookList';
import EditBook from './components/editbook';
import Home from './components/home';
import Statistics from './components/statistics';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Flux from './components/flux';
import CreateUser from './components/createUser';
import Auth from './components/auth';
import Register from './components/register';

function App() {
  return (
    <div className="min-h-screen ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/flux" element={<Flux />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/book" element={<CreateBook />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
