import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/Navigation';

/**
 * Main layout component that wraps all pages.
 * Includes header, main content area, and footer.
 */
export const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;