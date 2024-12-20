import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import ManageExperience from './Admin/ManageExperience';
import ManageProjects from './Admin/ManageProjects';
import Navbar from './Admin/Navbar';
import PrivateRoute from './PrivateRoute';  

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/" element={<Projects />} />
        <Route path="login/" element={<Login />} />
         
        <Route 
          path="edit/experience/" 
          element={
            <PrivateRoute>
              <Navbar />
              <ManageExperience />
            </PrivateRoute>
          } 
        />
        <Route 
          path="edit/projects/" 
          element={
            <PrivateRoute>
              <Navbar />
              <ManageProjects />
            </PrivateRoute>
          } 
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
