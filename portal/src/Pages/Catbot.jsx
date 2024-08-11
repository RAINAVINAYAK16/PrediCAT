import React from 'react';
import Sidebar from '../components/sidebar';
import MainContent from '../components/maincontent';

function Catbot() {
  return (
    <>
    <div className="flex h-screen  bg-white border-4 ">
      <Sidebar />
      <MainContent />
    </div>
    </>
  );
}

export default Catbot;