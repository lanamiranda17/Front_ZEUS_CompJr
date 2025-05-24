import React, { useState } from 'react';
import Nav_bar from '../Nav_bar/Nav_bar';
import './Layout_Nav.css';

function Layout_Nav({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="LayoutComNav">
      {/* Passa o estado do Drawer para o Nav_bar */}
      <Nav_bar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      
      <div className="ConteudoDashboard">
        {children}
      </div>
    </div>
  );
}

export default Layout_Nav;


