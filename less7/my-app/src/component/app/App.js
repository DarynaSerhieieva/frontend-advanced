import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Layout from '../layout/Layout';
import Main from '../main/Main';
import { AboutMe, Contacts, Portfolio, Skills, Error } from '../content';
import PortfolioId from '../content/portfolioConstruction/PortfolioId';

import './App.css';

const App = () =>{

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about_me" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:portfolioId" element={<PortfolioId />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
