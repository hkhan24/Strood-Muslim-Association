import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Basic SEO enhancements
    document.title = "Strood Muslim Association";
    
    // Add meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Welcome to Strood Muslim Association. Join our community to get started.";
  }, []);

  return (
    <>
      <div className="bg-mesh"></div>
      <div className="app-container">
        <main className="glass-card">
          <h1 className="title">
            Strood Muslim Association
          </h1>
          <p className="subtitle">
            Welcome to Strood Muslim Association to get started. We are dedicated to serving the community and fostering a welcoming environment for everyone.
          </p>
          
          <button className="btn-primary" id="get-started-btn">
            Get Started
            <svg 
              className="icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </button>
        </main>
      </div>
    </>
  );
}

export default App;
