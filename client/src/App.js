import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import { useEffect } from 'react';
import Loader from './components/Loader.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading, SetPortfolioData } from './redux/rootSlice.js';

export default function App() {
  const { loading } = useSelector(state => state.root || {});
  const dispatch = useDispatch();

  const getPortfolio = async () => {
    dispatch(ShowLoading());
    try {
      const response = await axios.get('/api/portfolio/get-portfolio');
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getPortfolio();
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(portfolioData);
  // }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
