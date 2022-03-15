import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorPage from "./pages/AuthorPage/AuthorPage";
import Navbarr from "./components/Navbarr";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import PostContentPage from "./pages/PostContentPage/PostContentPage";

function App() {
  return (
    <div>
      <Navbarr/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/post/:id" element={<PostContentPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
