import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './AboutPage.css';

/**
 * About page component - explains Chronomind's mission and values.
 */
export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Empathy First',
      description: 'We believe understanding the emotional experience of both caregivers and those with dementia is foundational to effective care.',
      icon: '❤️',
    },
    {
      title: 'Accessible Education',
      description: 'Dementia care training should be available to everyone, regardless of location, background, or financial means.',
      icon: '📚',
    },
    {
      title: 'Evidence-Based',
      description: 'Our simulations are grounded in clinical research and real caregiver experiences.',
      icon: '🔬',
    },
    {
      title: 'Continuous Improvement',
      description: 'We constantly update our content based on user feedback and emerging research.',
      icon: '🔄',
    },
  ];

  const milestones = [
    { year: '2023', event: 'Founded by Dr. Sarah Chen after years of clinical experience' },
    { year: '2024', event: 'First prototype developed with caregiver feedback' },
    { year: '2025', event: 'Launch of Family Caregiver Mode' },
    { year: '2026', event: 'Professional Caregiver Mode released' },
    { year: '2027', event: 'Expansion to educational institutions worldwide' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center">
            About Chronomind
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Transforming dementia care through experiential learning
          </Typography>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-page__mission">
        <div className="container">
          <Card variant="filled" padding="large" className="mission-card">
            <Typography variant="headingLarge" align="center">
              Our Mission
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              Chronomind seeks to end the deficit in dementia and aging education.
            </Typography>
            <Typography variant="bodyRegular" align="center" color="secondary" className="mission-statement">
              By turning education into experience, we're not just teaching caregiving, we're changing how caregivers learn, cope, and connect. Chronomind isn't just an app, it's a training tool, empathy builder, and a support system.
            </Typography>
          </Card>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="about-page__problem">
        <div className="container">
          <div className="about-page__problem-solution">
            <Card variant="elevated" padding="large" className="problem-card">
              <Typography variant="headingLarge" align="center" color="primary">
                The Problem
              </Typography>
              <Typography variant="bodyRegular" color="secondary">
                Current dementia caregivers often lack proper training, leading to stress, burnout, and suboptimal care. There's a significant gap between medical standards and practical caregiving knowledge, with no safe, affordable way to practice essential skills.
              </Typography>
            </Card>

            <Card variant="elevated" padding="large" className="solution-card">
              <Typography variant="headingLarge" align="center" color="primary">
                Our Solution
              </Typography>
              <Typography variant="bodyRegular" color="secondary">
                Chronomind provides authentic, interactive dementia care simulations that allow caregivers to practice crucial decisions in a risk-free environment. We bridge the gap between theory and practice through immersive scenarios that build both skills and empathy.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-page__values">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Our Values
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            The principles that guide everything we do
          </Typography>

          <div className="about-page__values-grid">
            {values.map((value, index) => (
              <Card key={index} variant="elevated" padding="medium" className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <Typography variant="headingMedium" align="center">
                  {value.title}
                </Typography>
                <Typography variant="bodySmall" align="center" color="secondary">
                  {value.description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-page__timeline">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Our Journey
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Key milestones in our development
          </Typography>

          <div className="about-page__timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">
                  <Typography variant="headingMedium" color="primary">
                    {milestone.year}
                  </Typography>
                </div>
                <div className="timeline-event">
                  <Typography variant="bodyRegular" color="secondary">
                    {milestone.event}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="about-page__contact">
        <div className="container">
          <Card variant="filled" padding="large" className="contact-card">
            <Typography variant="headingLarge" align="center">
              Get in Touch
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              We're always interested in connecting with caregivers, researchers, and partners who share our mission.
            </Typography>
            <div className="contact-links">
              <a href="mailto:hello@chronomind.com" className="contact-link">
                <Typography variant="bodyRegular" color="primary">
                  hello@chronomind.com
                </Typography>
              </a>
              <a href="/contact" className="contact-link">
                <Typography variant="bodyRegular" color="primary">
                  Partnership Inquiries
                </Typography>
              </a>
              <a href="/research" className="contact-link">
                <Typography variant="bodyRegular" color="primary">
                  Research Collaboration
                </Typography>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;