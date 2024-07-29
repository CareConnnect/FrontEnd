import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/reset.css';
import './style/App.css';

import { ContextProvider } from './provider/useContext';
import Main from './pages/Main';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ContextProvider> */}
        <ScrollToTop>
          <Routes>
            {/* Main */}
            <Route path="/" element={<Main />} />
            <Route path="/login/:type" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="*" element={<Main />} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
        {/* </ContextProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
