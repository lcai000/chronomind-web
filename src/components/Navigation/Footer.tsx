import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface FooterProps {
  /** Additional CSS class */
  className?: string;
}

/**
 * Main footer component for Chronomind website.
 * Contains site links, copyright, and social links.
 */
export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const resourceLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__container container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Logo & Description */}
          <div className="footer__logo-section">
            <Link to="/">
              <Typography variant="headingMedium" color="primary">
                Chronomind
              </Typography>
            </Link>
          </div>

          {/* Resources */}
          <div className="footer__links-section">
            <Typography variant="headingMedium" color="primary" className="footer__links-title">
              Resources
            </Typography>
            <ul className="footer__links-list">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    <Typography variant="bodySmall" color="secondary">
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__links-section">
            <Typography variant="headingMedium" color="primary" className="footer__links-title">
              Stay Updated
            </Typography>
            <Typography variant="bodySmall" color="secondary">
              Follow our Socials
            </Typography>
            <div style={{ marginTop: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a
                href="https://www.youtube.com/@chronomind-dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="secondary" size="small" fullWidth>
                  Youtube
                </Button>
              </a>
              <a
                href="https://github.com/lcai000"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="secondary" size="small" fullWidth>
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          {/* Copyright */}
          <Typography variant="caption" color="secondary" className="footer__copyright">
            © {currentYear} Chronomind Dementia Care Simulator. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;