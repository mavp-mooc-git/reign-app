import React from 'react';
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
      <Main />
      <Pagination />
    </div>
  );
}

export default App;
