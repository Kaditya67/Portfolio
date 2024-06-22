import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import { useState } from 'react';
import Loader from './components/Loader.js';

export default function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <>
      <BrowserRouter>
      {showLoading ? <Loader /> : null}
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}