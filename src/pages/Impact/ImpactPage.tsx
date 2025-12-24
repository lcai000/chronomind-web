import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './ImpactPage.css';

/**
 * Impact page component - showcases Chronomind's impact and market data.
 */
export const ImpactPage: React.FC = () => {
  const currentIssues = [
    'Lack of training for current dementia caregivers',
    'Caregiver stress and burnout due to underpreparedness',
    'Overreliance on trial and error to solve issues',
    'Underfunding in dementia/aging research',
    'Society lack awareness on aging diseases',
    'No easy way to practice dementia care skills in a low risk environment',
    'Many people lack access to proper aging and dementia care',
    'Current practice or simulations are too expensive',
  ];

  const growthStats = [
    { value: '29.1M → 56.7M', label: 'Global dementia care products market growth (2023-2033)' },
    { value: '1 in 6', label: 'People aged over 60 by 2030' },
    { value: '426M', label: 'People aged over 80 by 2050 (triple from 2020)' },
    { value: '35.55B → 64.79B', label: 'Dementia Care App Market (2026-2035)' },
    { value: '6.9%', label: 'Annual growth rate (CAGR) for dementia care apps' },
    { value: 'Double', label: 'Dementia cases by 2060' },
  ];

  const testimonials = [
    // TODO: replace first 2 with real ones
    // {
    //   quote: 'Chronomind helped me understand what my mother was experiencing. I feel more prepared and less anxious.',
    //   author: 'Family Caregiver',
    //   role: 'Daughter of dementia patient',
    // },
    // {
    //   quote: 'As a nursing student, the simulation gave me practical skills I couldn\'t get from textbooks alone.',
    //   author: 'Nursing Student',
    //   role: 'University of Health Sciences',
    // },
    {
      quote: 'Having lots of information is essential, I like how simple the app is. When most families come in, they have lots of questions about basic daily care.',
      author: 'Nurse Practioner',
      role: 'Sunset Senior Living',
    },
  ];

  return (
    <div className="impact-page">
      {/* Hero */}
      <section className="impact-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center">
            Our Impact
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Addressing critical gaps in dementia care through innovative training
          </Typography>
        </div>
      </section>

      {/* Current Issues */}
      <section className="impact-page__issues">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            The Problem We're Solving
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Current challenges in dementia care education and training
          </Typography>

          <div className="impact-page__issues-grid">
            {currentIssues.map((issue, index) => (
              <Card key={index} variant="outlined" padding="medium" className="issue-card">
                <Typography variant="bodyRegular" color="primary">
                  {issue}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Growth */}
      <section className="impact-page__growth">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            The Growing Need
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Market data underscores the urgent need for better dementia care solutions
          </Typography>

          <div className="impact-page__stats-grid">
            {growthStats.map((stat, index) => (
              <Card key={index} variant="elevated" padding="medium" className="stat-card">
                <Typography variant="displayMedium" align="center" color="primary">
                  {stat.value}
                </Typography>
                <Typography variant="bodySmall" align="center" color="secondary">
                  {stat.label}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="impact-page__testimonials">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Real Stories, Real Impact
          </Typography>

          <div className="impact-page__testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="filled" padding="large" className="testimonial-card">
                <Typography variant="bodyLarge" align="center" color="primary">
                  "{testimonial.quote}"
                </Typography>
                <div className="testimonial-author">
                  <Typography variant="headingMedium" align="center">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="bodySmall" align="center" color="secondary">
                    {testimonial.role}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="impact-page__cta">
        <div className="container">
          <Card variant="filled" padding="large" className="cta-card">
            <Typography variant="headingLarge" align="center">
              Join the Movement
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              Chronomind isn't just an app, it's a training tool, empathy builder, and a support system. It prepares caregivers for reality, reduces burnout, and ultimately improves quality of life for people not just people with dementia but also the people around them and society as a whole.
            </Typography>
            <div className="cta-actions">
              <a href="/demo" className="cta-link">
                <Typography variant="bodyRegular" color="primary">
                  Try the Demo →
                </Typography>
              </a>
              <a href="/contact" className="cta-link">
                <Typography variant="bodyRegular" color="primary">
                  Partner With Us →
                </Typography>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;