import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import { useEffect, useState } from 'react';
import Loader from './components/Loader.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading, SetPortfolioData } from './redux/rootSlice.js';

export default function App() {
  const { loading, portfolioData } = useSelector(state => state.root || {});
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  const getPortfolio = async () => {
    dispatch(ShowLoading());
    try {
      const response = await axios.get('/api/portfolio/get-portfolio');
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      // Delay hiding loader for at least 1 second
      setTimeout(() => {
        setShowLoader(false);
        dispatch(HideLoading());
      }, 500); // 1000 milliseconds = 1 second
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolio();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {showLoader && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
