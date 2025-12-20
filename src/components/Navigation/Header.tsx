import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface HeaderProps {
  /** Current active route */
  activeRoute?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * Main header component for Chronomind website.
 * Responsive with mobile hamburger menu.
 */
export const Header: React.FC<HeaderProps> = ({
  activeRoute = '/',
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/app', label: 'App' },
    { path: '/demo', label: 'Demo' },
    { path: '/team', label: 'Team' },
    { path: '/impact', label: 'Impact' },
    { path: '/about', label: 'About' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClass = `header${isHome ? ' header--home' : ''}${className ? ` ${className}` : ''}`;

  return (
    <header className={headerClass}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMobileMenu}>
          <Typography variant="headingMedium" color="primary">
            Chronomind
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop">
          <ul className="header__nav-list">
            {navigationItems.map((item) => (
              <li key={item.path} className="header__nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {({ isActive }) => (
                    <Typography
                      variant="bodyRegular"
                      color={isActive ? 'primary' : 'secondary'}
                    >
                      {item.label}
                    </Typography>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          {/* Mobile Menu Toggle */}
          <Button
            variant="text"
            size="small"
            onClick={toggleMobileMenu}
            className="header__menu-toggle"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="header__hamburger">
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__nav header__nav--mobile">
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {({ isActive }) => (
                      <Typography
                        variant="bodyLarge"
                        color={isActive ? 'primary' : 'secondary'}
                      >
                        {item.label}
                      </Typography>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;