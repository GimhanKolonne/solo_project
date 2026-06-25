import React from 'react';
import Header from '../common/header';
import { Footer } from '../common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
