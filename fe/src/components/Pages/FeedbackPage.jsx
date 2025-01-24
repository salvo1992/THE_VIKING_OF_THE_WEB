import React from 'react';
import './FeedbackPage.css';

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h2>Client Feedback</h2>
      <div className="feedback">
        <div className="feedback-item">
          <p>"Excellent work! Very professional."</p>
          <p>- Client 1</p>
        </div>
        <div className="feedback-item">
          <p>"Great experience working together!"</p>
          <p>- Client 2</p>
        </div>
        {/* Aggiungi altri feedback */}
      </div>
    </div>
  );
};

export default FeedbackPage;

