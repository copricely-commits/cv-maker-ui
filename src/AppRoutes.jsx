import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/AiTextarea/LandingPage';
import Home from './components/Home/Home';
export default function AppRoutes() {
  return (
   
      <BrowserRouter>
        <Routes>
  <Route path="/" element={<LandingPage/>} />
  <Route path="/cv-maker" element={<Home/>} />

            </Routes>
            </BrowserRouter>
         
  )
}
