import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Recipes from "./pages/Recipes"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/TwoBakers2/" element={<Home />} />
        <Route path="/TwoBakers2/Recipes" element={<Recipes />} />
        <Route path="/TwoBakers2/About" element={<About />} />
        <Route path="/TwoBakers2/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

