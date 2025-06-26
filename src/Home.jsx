import React from 'react';
import './Home.css';

const Home = () => (
  <>
    <section className="home-section">
      <header className="header">
        <nav className="nav nav-top-right">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Projects</button>
          <button className="nav-btn">About</button>
        </nav>
      </header>
      <div className="hero">
        <div className="hero-content">
          <p className="intro">Hey, I'm Deepu<span className="wave">👋</span></p>
          <h1 className="title">
            <span className="front">Front</span>
            <span className="end">end</span><br />
            <span className="developer">Developer</span>
          </h1>
          <p className="subtitle">I'm a frontend developer based in Italy, I'll help you build beautiful websites your users will love.</p>
          <div className="hero-buttons">
            <button className="btn primary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="circle-outline">
            <img src="/prfile.jpg" className="profile-img" />
          </div>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="projects-section">
      <h2 className="projects-title">
        Projects<span className="dot">.</span>
      </h2>
      <div className="screenshots-row" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
        <img src="/screenshots/screenshot1.png" alt="Project Screenshot 1" className="project-screenshot" style={{ maxWidth: '48%', borderRadius: '20px', background: '#ececec' }} />
        <img src="/screenshots/screenshot2.png" alt="Project Screenshot 2" className="project-screenshot" style={{ maxWidth: '48%', borderRadius: '20px', background: '#ececec' }} />
      </div>
      <div className="projects-grid">
        {/* Project cards removed as requested */}
      </div>
    </section>

    {/* Skills Section */}
    <section className="skills-section">
      <h2 className="skills-title">
        Skills<span className="dot">.</span>
      </h2>
      <div className="skills-table" style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', margin: '2rem 0' }}>
        <div className="skills-column" style={{ minWidth: '180px', flex: 1, textAlign: 'left' }}>
          <h3 className="skills-heading" style={{ marginBottom: '1rem' }}>Web Design</h3>
          <ul className="skills-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
            <li>Figma Design</li>
            <li>Responsive Design</li>
            <li>Flexbox</li>
            <li>User Research</li>
          </ul>
        </div>
        <div className="skills-column" style={{ minWidth: '180px', flex: 1, textAlign: 'left' }}>
          <h3 className="skills-heading" style={{ marginBottom: '1rem' }}>Frontend</h3>
          <ul className="skills-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>HTML</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="skills-column" style={{ minWidth: '180px', flex: 1, textAlign: 'left' }}>
          <h3 className="skills-heading" style={{ marginBottom: '1rem' }}>Backend</h3>
          <ul className="skills-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
            <li>NodeJs</li>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>Vercel</li>
          </ul>
        </div>
        <div className="skills-column" style={{ minWidth: '180px', flex: 1, textAlign: 'left' }}>
          <h3 className="skills-heading" style={{ marginBottom: '1rem' }}>Soft Skills</h3>
          <ul className="skills-list" style={{ textAlign: 'left', paddingLeft: '1.2em' }}>
            <li>Effective communication</li>
            <li>Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="footer-section" style={{ width: '100%', marginTop: '4rem', padding: '2rem 0 1rem 0', background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="footer-cta" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 600, fontSize: '2rem', marginBottom: '1.5rem' }}>
          Interested in working together<span style={{ color: '#7B2FF2' }}>? </span>
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button className="btn primary" style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.9rem 2.2rem', borderRadius: '10px' }}>Get In Touch</button>
          <button className="btn secondary" style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0.9rem 2.2rem', borderRadius: '10px', border: '2px solid #222', background: 'white', color: '#222' }}>Browse Projects</button>
        </div>
      </div>
      <div className="footer-bottom" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', gap: '0.2rem' }}>
        <div style={{ color: '#444', fontSize: '1.1rem', marginBottom: '0.2rem' }}>©2023 All Rights Reserved.</div>
        <div style={{ color: '#444', fontSize: '1.1rem' }}>
          Made with <span style={{ color: '#7B2FF2', fontSize: '1.2em', verticalAlign: 'middle' }}>💜</span> by Deepu
        </div>
      </div>
    </footer>
  </>
);

export default Home;
