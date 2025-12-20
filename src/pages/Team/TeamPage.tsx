import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './TeamPage.css';

/**
 * Team page component - showcases the Chronomind team.
 */
export const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Neurologist with 15+ years experience in dementia care.',
      expertise: 'Clinical Neurology, Caregiver Training',
      avatar: '👩‍⚕️',
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      bio: 'Software engineer specializing in educational technology.',
      expertise: 'React Native, Simulation Design',
      avatar: '👨‍💻',
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Clinical Director',
      bio: 'Geriatric psychologist focusing on caregiver mental health.',
      expertise: 'Psychology, Stress Management',
      avatar: '👩‍🏫',
    },
    {
      name: 'David Kim',
      role: 'UX/UI Designer',
      bio: 'Accessibility-focused designer with healthcare experience.',
      expertise: 'Accessibility, User Research',
      avatar: '🎨',
    },
  ];

  const advisors = [
    {
      name: 'Prof. James Wilson',
      role: 'Advisory Board Chair',
      affiliation: 'Stanford University Geriatrics',
      avatar: '👴',
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Ethics Advisor',
      affiliation: 'National Dementia Care Network',
      avatar: '👩‍⚖️',
    },
    {
      name: 'Lisa Thompson',
      role: 'Caregiver Advocate',
      affiliation: 'Family Caregiver Alliance',
      avatar: '👵',
    },
  ];

  return (
    <div className="team-page">
      {/* Hero */}
      <section className="team-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center">
            Our Team
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Passionate professionals dedicated to transforming dementia care training
          </Typography>
        </div>
      </section>

      {/* Mission */}
      <section className="team-page__mission">
        <div className="container">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" align="center">
              Our Mission
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              Chronomind seeks to end the deficit in dementia and aging education. By turning education into experience, we're not just teaching caregiving, we're changing how caregivers learn, cope, and connect.
            </Typography>
          </Card>
        </div>
      </section>

      {/* Core Team */}
      <section className="team-page__core">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Core Team
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            The dedicated professionals building Chronomind
          </Typography>

          <div className="team-page__grid">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="elevated" padding="medium" className="team-member">
                <div className="team-member__avatar">{member.avatar}</div>
                <Typography variant="headingMedium" align="center">
                  {member.name}
                </Typography>
                <Typography variant="bodySmall" align="center" color="primary">
                  {member.role}
                </Typography>
                <Typography variant="bodySmall" align="center" color="secondary">
                  {member.bio}
                </Typography>
                <div className="team-member__expertise">
                  <Typography variant="caption" color="secondary">
                    Expertise: {member.expertise}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="team-page__advisors">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Advisory Board
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Experts guiding our mission and impact
          </Typography>

          <div className="team-page__grid team-page__grid--advisors">
            {advisors.map((advisor, index) => (
              <Card key={index} variant="outlined" padding="medium" className="advisor">
                <div className="advisor__avatar">{advisor.avatar}</div>
                <Typography variant="headingMedium" align="center">
                  {advisor.name}
                </Typography>
                <Typography variant="bodySmall" align="center" color="primary">
                  {advisor.role}
                </Typography>
                <Typography variant="bodySmall" align="center" color="secondary">
                  {advisor.affiliation}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="team-page__join">
        <div className="container">
          <Card variant="filled" padding="large" className="join-card">
            <Typography variant="headingLarge" align="center">
              Join Our Mission
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              We're always looking for passionate individuals to help transform dementia care.
            </Typography>
            <div className="join-actions">
              <a href="mailto:careers@chronomind.com" className="join-link">
                <Typography variant="bodyRegular" color="primary">
                  View Open Positions →
                </Typography>
              </a>
              <a href="mailto:advisor@chronomind.com" className="join-link">
                <Typography variant="bodyRegular" color="primary">
                  Become an Advisor →
                </Typography>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;