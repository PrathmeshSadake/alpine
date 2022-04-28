import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

import Homepage from './pages/Homepage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
