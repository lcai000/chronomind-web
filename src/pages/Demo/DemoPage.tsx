import React from 'react';
import './DemoPage.css';

/**
 * Demo page component - now only shows a YouTube preview.
 */
export const DemoPage: React.FC = () => {
  return (
    <div className="demo-page">
      <section className="demo-page__video" style={{ padding: 'var(--space-6) 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '960px', aspectRatio: '16 / 9' }}>
            <iframe
              className="demo-video-embed"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Yd24wNS71aI?mute=1"
              title="Chronomind Demo Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;