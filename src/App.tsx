import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Pagination from './components/Pagination';
import Tabs from './components/Tabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Routes>
        <Route path="/" element={<Main type={"api"} />} />
        <Route path="/faves" element={<Main type={"fav"} />} />
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;
