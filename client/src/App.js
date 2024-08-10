import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Home from './pages/Home';
import Loader from './components/Loader';
import Admin from './pages/Admin/Admin';
import Login from './pages/Admin/Login';
import { ShowLoading, HideLoading, SetPortfolioData, ReloadData } from './redux/rootSlice';

function App() {
  const { loading, portfolioData, reloadData, isAuthenticated } = useSelector(state => state.root || {});
  const dispatch = useDispatch();

  const getPortfolio = async () => {
    dispatch(ShowLoading());
    try {
      const response = await axios.get('/api/portfolio/get-portfolio');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolio();
    }
  }, [portfolioData, reloadData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Protected Route for Admin */}
        {/* <Route path='/admin/*' element={ isAuthenticated ? <Admin /> : <Navigate to='/login' /> } /> */}
        <Route path='/adminking123' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
