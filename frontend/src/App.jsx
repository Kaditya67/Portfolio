import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}