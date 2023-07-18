import React from 'react';
import Navbar from '../../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;