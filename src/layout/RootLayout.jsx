import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/footer';
import FriendsKeep from '../components/banner/FriendsKeep';
import { ToastContainer } from 'react-toastify';



const RootLayout = () => {
    return (
        <div>
           <Navbar />
                <Outlet />
            <Footer />
            {/* Toast Contain */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;