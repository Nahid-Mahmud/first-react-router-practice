import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';

const Routes = () => {
    return (
        <>
        <div>
          <Header></Header>
        </div>
        <Outlet></Outlet>
        <div>
        <Footer></Footer>
        </div>
      </>
    );
};

export default Routes;