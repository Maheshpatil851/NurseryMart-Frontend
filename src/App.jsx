import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'

import LayOut from './Views/Layout'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App