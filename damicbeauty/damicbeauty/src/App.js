import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from "./ui/Navbar";
import Home from "./pages/Home";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
