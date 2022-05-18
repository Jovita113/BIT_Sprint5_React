import SimpleBottomNavigation from "./components/NavBar/BottomNav";
import ResponsiveAppBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/NavBar/BookList";
import Contact from "./components/NavBar/Contact";
import Home from "./components/NavBar/Home";
import "./App.css";


function App() {
  return (
  <>
    <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BookList" element={<BookList />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </BrowserRouter> 
      <SimpleBottomNavigation />
      </>
  );
}
export default App;
