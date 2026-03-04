import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx'
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import { useState } from 'react';
import './App.css'
import books from './data/horror.json'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import BookDetail from "./pages/BookDetail.jsx";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(books)

  return (
    <>
      <MyNav setFilteredBooks={setFilteredBooks} />
      <BrowserRouter>


        <Routes>

          <Route path="/" element={<>
            <Welcome />

            <AllTheBooks filteredBooks={filteredBooks} />
          </>} />
          <Route path="/:asin" element={<BookDetail />} />

          <Route path="*" element={<NotFound />} />

        </Routes>




      </BrowserRouter>
      <MyFooter />

    </>
  )
}

export default App;


