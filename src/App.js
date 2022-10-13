import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./comps/about";
import Gallery from "./comps/gallery"

import Home from "./comps/home";



function App() {
  return (
 <BrowserRouter>
 <header className="border p-2 container">
  <a href="/" className="me-2">home</a>
  <a href="/about" className="me-2">home</a>
  <a href="/gallery" className="me-2">home</a>
    <h2>header</h2>
 </header>
    <Routes>
     <Route index element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/*" element={<div>
      <h2>page not found 404</h2>
     </div>}/>
    </Routes>

    <footer>
      <h3>footer</h3>
    </footer>
 </BrowserRouter>
  
    
  );
}

export default App;
