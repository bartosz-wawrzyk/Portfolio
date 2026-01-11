import React from "react";
import skillsData from "../data/skills.json";
import { useLanguage } from "../App";
import "../styles/Skills.css";

const Skills = () => {
  const { language } = useLanguage();
  const t = skillsData[language];

  return (
    <div className="skills-content">
      <h1>{t.title}</h1>

      <div className="skills-grid">
        {t.skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
