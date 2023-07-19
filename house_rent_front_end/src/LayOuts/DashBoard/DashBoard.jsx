import React from 'react';
import Navbar from '../../Pages/Navbar/Navbar';
import OwnerDashboard from '../../DashBoard/HouseOwner/OwnerDashboard';

const DashBoardLayout = () => {
    return (
        <>
           <Navbar></Navbar>
         <OwnerDashboard></OwnerDashboard>
        </>
    );
};

export default DashBoardLayout;