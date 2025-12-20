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

  const siteLinks = [
    { path: '/', label: 'Home' },
    { path: '/app', label: 'App' },
    { path: '/demo', label: 'Demo' },
    { path: '/team', label: 'Team' },
    { path: '/impact', label: 'Impact' },
    { path: '/about', label: 'About' },
  ];

  const resourceLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/support', label: 'Support' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'GitHub', icon: '📦', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
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
            <Typography variant="bodySmall" color="secondary" className="footer__description">
              A dementia care simulation app that trains family caregivers and students through authentic, interactive scenarios.
            </Typography>
            <Button variant="primary" size="small">
              Try Demo
            </Button>
          </div>

          {/* Site Links */}
          <div className="footer__links-section">
            <Typography variant="headingMedium" color="primary" className="footer__links-title">
              Site
            </Typography>
            <ul className="footer__links-list">
              {siteLinks.map((link) => (
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
              Subscribe to our newsletter for updates on dementia care training.
            </Typography>
            <div style={{ marginTop: 'var(--space-1)' }}>
              <Button variant="secondary" size="small" fullWidth>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          {/* Copyright */}
          <Typography variant="caption" color="secondary" className="footer__copyright">
            © {currentYear} Chronomind Dementia Care Simulator. All rights reserved.
          </Typography>

          {/* Social Links */}
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="footer__social-link"
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="bodyRegular" color="inherit">
                  {social.icon}
                </Typography>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;