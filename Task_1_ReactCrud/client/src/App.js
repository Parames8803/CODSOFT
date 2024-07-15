import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/components/Layout'
import About from './pages/About'
import Service from './pages/Service'
import Home from './pages/Home' 
import Login from './components/Login';
import Signup from '../src/components/Signup'


function App() {
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='service' element={<Service/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<Signup/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
