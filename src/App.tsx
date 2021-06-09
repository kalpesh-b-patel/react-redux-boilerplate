import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Paper>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </Paper>
  );
}

export default App;
