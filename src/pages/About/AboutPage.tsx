import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './AboutPage.css';

/**
 * About page component - explains Chronomind's mission and values.
 */
export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Landon Cai',
      role: 'Cofounder + Lead Developer',
      avatar: '👨‍💻',
    },
    {
      name: 'Joyce Song',
      role: 'Cofounder + Communication Lead',
      avatar: '👨‍💻',
    },
    {
      name: 'Darryl Tang',
      role: 'Software Developer',
      avatar: '👨‍💻',
    },
  ];

  const values = [
    {
      title: 'Simplicity',
      description: 'We prioritize a clean, intuitive interface because we know how frustrating complex software can be. Everything we build is designed to be as straightforward as possible, so you can focus on learning, not navigating.',
      icon: '',
    },
    {
      title: 'Accessible Education',
      description: 'Dementia care training should be available to everyone, regardless of location, background, or financial means.',
      icon: '',
    },
    {
      title: 'Evidence-Based',
      description: 'Our approach is rooted in real-world expertise. We have consulted and interviewed local caregiving facilities and professional caregivers to ensure our simulations reflect the actual challenges faced in daily care.',
      icon: '',
    },
];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center">
            About Chronomind
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

      {/* Values */}
      <section className="about-page__values">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Our Values
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            The principles that guide our work
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

      {/* Core Team */}
      <section className="about-page__team">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Team
          </Typography>

          <div className="about-page__team-grid">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="elevated" padding="medium" className="team-member">
                <div className="team-member__avatar">{member.avatar}</div>
                <Typography variant="headingMedium" align="center">
                  {member.name}
                </Typography>
                <Typography variant="bodySmall" align="center" color="primary">
                  {member.role}
                </Typography>
              </Card>
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
              <a href="mailto:chronomind.contact.dev@gmail.com" className="contact-link">
                <Typography variant="bodyRegular" color="primary">
                  chronomind.contact.dev@gmail.com
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