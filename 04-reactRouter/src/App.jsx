import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
