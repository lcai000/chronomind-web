import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import './HomePage.css';

/**
 * Home page component - landing page for Chronomind website.
 */
export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center" className="home-page__title">
            Chronomind
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary" className="home-page__subtitle">
            Train family caregivers and students through authentic, interactive scenarios
          </Typography>

        </div>
      </section>

      {/* Overview Section */}
      <section className="home-page__overview">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Why Chronomind?
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Chronomind is a mobile dementia care simulation app that trains family caregivers and students through authentic, interactive scenarios. By practicing decisions in a safe environment, users learn crucial skills rather than real-life caregiving scenarios.
          </Typography>

          <div className="home-page__stats">
            <Card variant="elevated" padding="medium" className="stat-card">
              <Typography variant="displayMedium" align="center" color="primary">
                29.1M
              </Typography>
              <Typography variant="bodySmall" align="center" color="secondary">
                Global dementia care products market (2023)
              </Typography>
            </Card>
            <Card variant="elevated" padding="medium" className="stat-card">
              <Typography variant="displayMedium" align="center" color="primary">
                56.7M
              </Typography>
              <Typography variant="bodySmall" align="center" color="secondary">
                Expected market by 2033
              </Typography>
            </Card>
            <Card variant="elevated" padding="medium" className="stat-card">
              <Typography variant="displayMedium" align="center" color="primary">
                1 in 6
              </Typography>
              <Typography variant="bodySmall" align="center" color="secondary">
                People aged over 60 by 2030
              </Typography>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="home-page__cta">
        <div className="container">
          <Card variant="filled" padding="large" className="cta-card">
            <Typography variant="headingLarge" align="center">
              Ready to transform dementia care training?
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              Join thousands of caregivers already using Chronomind to build essential skills.
            </Typography>
            <div className="cta-actions">
              <Button variant="primary" size="large" onClick={() => navigate('/demo')}>
                Start Free Demo
              </Button>
              <Button variant="text" size="large" onClick={() => navigate('/impact')}>
                Impact
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;