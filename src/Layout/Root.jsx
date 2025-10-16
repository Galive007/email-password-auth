import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import MyContainer from '../Component/MyContainer/MyContainer';

const Root = () => {
    return (
        <div className='flex flex-col'>
            <MyContainer>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </MyContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;