import { BrowserRouter, Route, Routes } from "react-router-dom"
import  "./App.css"
import React from 'react'
import Home from "./pages/Home"
import Story from "./pages/Story"
import Works from "./pages/Works"
import Books from "./pages/Books"
import Login from "./pages/Login"

const App = () => {
  return (
    <div className="app">
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/story" element={<Story/>} />
    <Route path="/works" element={<Works/>} />
    <Route path="/books" element={<Books/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App