import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Layout from '../layout/Layout';
import Main from '../main/Main';
import { AboutMe, Contacts, Portfolio, Skills } from '../content';

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
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
