import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingpage';


function App() {

  return (
    <>
      <div>
        <Routes>
        <Route path='*' element={<LandingPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
