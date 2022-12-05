import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';


import './App.css';
import ViewCards from './pages/ViewCards';
import EditCards from './pages/EditCards';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="view" element={<ViewCards />} />
          <Route path="edit" element={<EditCards />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
