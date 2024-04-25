import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path='api/users/signup'
          element={
            !isAuthenticated ? < Signup /> : <Navigate to='../api/users/dashboard' />
          }
        />
        <Route
          path='api/users/login'
          element={!isAuthenticated ? <Login /> : <Navigate to='../api/users/dashboard' />
          }
        />
        <Route
          path='api/users/dashboard'
          element={isAuthenticated ? <Dashboard /> : <Login />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;