import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './view/main';
import MainMid from './components/mainMid';
import Menu from './components/menu';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    <MainMid />
    <Menu />
    </>
  );
}

export default App;
