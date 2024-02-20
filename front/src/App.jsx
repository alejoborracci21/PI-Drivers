import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage/landingpage';
import HomePage from './pages/HomePage/homepage';
import FormPage from './pages/FormPage/formpage';
import DetailPage from './pages/DetailPage/detailpage';
import AboutMe from './pages/aboutpage/aboutme';


function App() {


  return (
    <>
        <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/create' element={<FormPage/>}/>
        <Route path='*' element={<LandingPage/>}/>
        </Routes>
    </>
  )
}

export default App
