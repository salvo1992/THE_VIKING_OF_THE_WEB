import React, { useState, useEffect, useRef } from 'react';
import Letterize from 'letterizejs';
import anime from 'animejs';
import styles from './FeedbackPage.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaStar } from 'react-icons/fa';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState(() => JSON.parse(localStorage.getItem('feedbacks')) || []);
  const [progress, setProgress] = useState(0);
  const titleRef = useRef(null);
  const thanksRef = useRef(null);

  useEffect(() => {
    const test = new Letterize({ targets: titleRef.current });

    anime.timeline({ targets: test.listAll, delay: anime.stagger(50), loop: true })
      .add({ translateY: -40, opacity: [0,1], color: '#00ffea' })
      .add({ translateY: 0, opacity: [1,0.7], color: '#0ff' });

    anime({
      targets: thanksRef.current,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: 1000
    });

    anime({
      targets: thanksRef.current,
      opacity: [0, 1],
      translateY: [50, 0]
    });

    anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [-50, 0]
    });

    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(savedFeedbacks => savedFeedbacks.length ? savedFeedbacks : feedbacks);

    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      if (progressValue > 70) clearInterval(interval);
      setProgress(progressValue);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if(rating > 0 && comment.trim()) {
      const updatedFeedbacks = [...feedbacks, { rating, comment }];
      setFeedbacks(updatedFeedbacks);
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
      setRating(0);
      setComment('');
    }
  };

  const averageRating = feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / (feedbacks.length || 1);

  return (
    <div className={styles.feedbackContainer}>
      <h2 ref={titleRef} className={styles.animatedTitle}>Welcome  to FeedbackPage  -
          the Wiking  of the web</h2>
      <div className={styles.feedbackFormContainer}>
        <form onSubmit={handleFeedbackSubmit}>
          <div className={styles.starRating}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={30}
                color={(hover || rating) > i ? "#00ffea" : "#555"}
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>
          <textarea
            className={styles.feedbackTextarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment here..."
            required
          />
          <button className={styles.submitButton} type="submit">Submit Feedback</button>
        </form>
      </div>

      <div className={styles.feedbackListContainer}>
        <h3>User Feedbacks</h3>
        <ul>
          {feedbacks.map((fb, index) => (
            <li key={index}>{fb.rating}★ - {fb.comment}</li>
          ))}
        </ul>
      </div>

      <div className={styles.feedbackAverageContainer}>
        <CircularProgressbar
          value={(averageRating / 5) * 100}
          text={`${averageRating.toFixed(1)}★`}
          styles={buildStyles({
            pathColor: '#00ffea',
            textColor: '#00ffea',
            trailColor: '#333',
            textSize: '20px',
          })}
        />
      </div>

      <div className={styles.additionalMetricsContainer}>
        <div className={styles.metricItem}>
          <CircularProgressbar
            value={progress}
            text={`Creatività`}
            styles={buildStyles({ pathColor: '#00ffea', textColor: '#00ffea', trailColor: '#333' })}
          />
          <CircularProgressbar
            value={progress}
            text={`Professionalità`}
            styles={buildStyles({ pathColor: '#00ffea', textColor: '#00ffea', trailColor: '#333' })}
          />
          <CircularProgressbar
            value={progress}
            text={`Qualità`}
            styles={buildStyles({ pathColor: '#00ffea', textColor: '#00ffea', trailColor: '#333' })}
          />
        </div>
      </div>

      <h3 ref={thanksRef} className={styles.thanksText}>Grazie per aver visualizzato la pagina!</h3>
    </div>
  );
};

export default FeedbackPage;


