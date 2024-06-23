import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import { useEffect, useState } from 'react';
import Loader from './components/Loader.js';
import axios from 'axios';

export default function App() {
  const [showLoading, setShowLoading] = useState(false);

  const getPortfolio = async () => {
    try {
      const response = await axios.get('api/portfolio/get-portfolio');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPortfolio();
  }, [])

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