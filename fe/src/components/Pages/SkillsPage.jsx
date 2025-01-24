import React, { useEffect, useState } from 'react';
import './SkillsPage.css';

const SkillsPage = ({ isAdmin }) => {
  const [widths, setWidths] = useState({
    JavaScript: '0%',
    React: '0%',
    SQL: '0%',
    'Three.js': '0%',
    MongoDB: '0%',
    TailWindCSS: '0%',
    Angular: '0%',
    Linux: '0%',
    PHP: '0%',
    PostgreSQL: '0%',
    Java: '0%',
    TypeScript: '0%',
    'Machine learning': '0%',
    'Express.js': '0%',
    Python: '0%',
    Docker: '0%',
    MySQL: '0%',
    'Node.js': '0%',
    AngularJS: '0%',
    'Frontend Development': '0%',
    AJAX: '0%',
    'Agile Development': '0%',
    Bootstrap: '0%',
    GitHub: '0%',
    AI: '0%',
    'Next.js': '0%',
    'Backend Development': '0%',
    'Vue.js': '0%',
    DevOps: '0%',
  });
  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'SQL', 'Three.js', 'MongoDB', 'TailWindCSS',
    'Angular', 'Linux', 'PHP', 'PostgreSQL', 'Java', 'TypeScript', 'Machine learning',
    'Express.js', 'Python', 'Docker', 'MySQL', 'Node.js', 'AngularJS', 'Frontend Development',
    'AJAX', 'Agile Development', 'Bootstrap', 'GitHub', 'AI', 'Next.js', 'Backend Development', 'Vue.js', 'DevOps'
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // Aggiungiamo l'animazione di ingresso per la larghezza delle barre
    const timeouts = Object.keys(widths).map((key, index) => 
      setTimeout(() => {
        setWidths(prev => ({
          ...prev,
          [key]: `${90 - index * 2}%`, // Impostiamo una larghezza crescente per ciascuna skill
        }));
      }, index * 300) // Ritardo progressivo per le animazioni
    );
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
      setIsAdding(false);
    }
  };

  return (
    <div className="skills-page">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: widths[skill] }}></div>
            </div>
          </div>
        ))}
      </div>

      {isAdmin && (
        <div className="add-skill">
          {!isAdding ? (
            <button className="add-skill-button" onClick={() => setIsAdding(true)}>
              Add New Skill
            </button>
          ) : (
            <div className="add-skill-form">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Enter a new skill"
              />
              <button onClick={handleAddSkill}>Add Skill</button>
              <button onClick={() => setIsAdding(false)}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillsPage;

