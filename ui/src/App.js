import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/createBook";
import BookList from "./components/bookList";
import EditBook from "./components/editbook";
import Home from "./components/home";
import Statistics from "./components/statistics";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/stats" element={<Statistics />} />
          <Route path="/book" element={<CreateBook />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
