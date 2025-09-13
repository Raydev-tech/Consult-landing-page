import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./pages/Hero.jsx";
import { Services } from "./pages/Services.jsx";
import { Footer } from "./components/Footer.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
