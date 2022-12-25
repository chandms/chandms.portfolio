import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Blogs from './Blogs';
import Home from './Home';





const Main = () => {
  return (
    <Routes> 
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/blogs' element={<Blogs />}></Route>
    </Routes>
  );
}

export default Main;