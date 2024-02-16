import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage';
import HomePage from './pages/HomePage/homepage';
import FormPage from './pages/FormPage/formpage';
import DetailPage from './pages/DetailPage/detailpage';
import AboutMe from './pages/aboutpage/aboutme';

function App() {

  return (
    <>
      <div>
        <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/create' element={<FormPage/>}/>
        <Route path='*' element={<LandingPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
