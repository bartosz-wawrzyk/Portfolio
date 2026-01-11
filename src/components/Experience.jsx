import React from "react";
import { useLanguage } from "../App";
import experienceData from "../data/experience.json";
import "../styles/Experience.css";

const Experience = () => {
  const { language } = useLanguage();
  const t = experienceData[language];

  return (
    <div className="experience-content">
      <h1>{t.title}</h1>
      <div className="experiences-list">
        {t.experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-header">
              <h3>{exp.position}</h3>
              <div className="company-period">
                {exp.company && <span className="company">{exp.company}</span>}
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <div className="responsibilities">
              <h4>{language === "PL" ? "Zakres obowiązków:" : "Responsibilities:"}</h4>
              <ul className="responsibilities-list">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;