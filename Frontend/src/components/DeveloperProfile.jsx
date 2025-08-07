import React from 'react';
import { Github, Linkedin, Code, Heart, Mail } from 'lucide-react';

const DeveloperProfile = () => {
  return (
    <div className="developer-profile-container">
      <div className="developer-profile-wrapper">
        <div className="developer-profile-card">
          {/* Header */}
          <div className="developer-profile-header">
            <div className="developer-profile-icon">
              <Code className="code-icon" />
            </div>
            <h2 className="developer-profile-title">
              Meet the Developer
            </h2>
            <div className="developer-profile-divider"></div>
          </div>

          {/* Profile Content */}
          <div className="developer-profile-content">
            {/* Profile Image */}
            <div className="developer-profile-avatar">
              <div className="avatar-container">
                <div className="avatar-inner">
                  <div className="avatar-initials">
                    SA
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="developer-profile-info">
              <h3 className="developer-name">
                Sahil Ansari
              </h3>
              <p className="developer-role">
                Full Stack Developer 
              </p>
              
              <div className="developer-bio">
                <p>
                  Passionate about creating innovative healthcare solutions that make a difference. 
                  MediNova represents my commitment to bridging technology and healthcare, 
                  providing accessible and efficient medical services for everyone.
                </p>
              </div>

              {/* Made with love */}
              <div className="made-with-love">
                <span>Made with</span>
                <Heart className="heart-icon" />
                <span>for better healthcare</span>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin-link"
                >
                  <Linkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github-link"
                >
                  <Github className="social-icon" />
                  <span>GitHub</span>
                </a>

                <a
                  href="mailto:sahil920ansari@example.com"
                  className="social-link email-link"
                >
                  <Mail className="social-icon" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-section">
            <h4 className="tech-stack-title">
              Built With Modern Technologies
            </h4>
            <div className="tech-stack-grid">
              {['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'JavaScript'].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;