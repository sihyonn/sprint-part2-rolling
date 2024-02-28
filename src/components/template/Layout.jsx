import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      gnb 들어갈 예정!
      <Outlet />
      {children}
    </div>
  );
}

export default Layout;
