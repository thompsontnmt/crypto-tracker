import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" 
            element={<Homepage />} />

            <Route path="/exchanges" 
            element={<Exchanges />} />

            <Route path="/cryptocurrencies" 
            element={<Cryptocurrencies />} />
{/* "/crypto/:coinuuid"  */}
            <Route path="/crypto/:uuid" 
            element={<CryptoDetails />} />

            <Route path="/news"
            element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>© 2022 
        <br />
          <a href="https://thompsonmt.netlify.app/" target='_blank' rel=" noreferrer">ThompsonMT</a>
          {/* <Link to="/">
             ThompsonMT
          </Link> <br /> */} <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;