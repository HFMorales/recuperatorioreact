import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<Calculator />} />
    </Routes>
  </>
);

export default App;
