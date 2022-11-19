import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/createBook";
import BookList from "./components/bookList";
import EditBook from "./components/editbook";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book" element={<CreateBook />} />
        <Route path="/bookList" element={<BookList />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
