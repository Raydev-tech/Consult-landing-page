import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./pages/Hero.jsx";
import { Services } from "./pages/Services.jsx";
import { Footer } from "./components/Footer.jsx";
import Login from "./components/Login.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
