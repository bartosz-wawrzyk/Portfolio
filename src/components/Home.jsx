import React from "react";
import profilePhoto from "../assets/profile.png";
import "../styles/Home.css";

import general from "../data/general.json";
import educationData from "../data/education.json";
import skillsData from "../data/skills.json";
import { useLanguage } from "../App";

const Home = () => {
  const { language } = useLanguage();

  const tGeneral = general[language];
  const tEducation = educationData[language];
  const tSkills = skillsData[language];

  return (
    <div className="home-container">
      <header className="profile-header">
        <img src={profilePhoto} alt="Bartosz Wawrzyk" className="profile-image" />
        <div className="profile-info">
          <h1>{tGeneral.title}</h1>
          <h2>{tGeneral.position}</h2>
          <p>{tGeneral.description}</p>
        </div>
      </header>

      <section className="info-cards">
        <div className="info-card education-card">
          <h3>{language === "EN" ? "Education" : "Wykształcenie"}</h3>
          {tEducation.map((edu, idx) => (
            <div key={idx} className="education-item">
              <strong className="school">{edu.school}</strong>
              <span className="degree">{edu.degree}</span>
              <span className="period">{edu.period}</span>
              <p className="field">{edu.field}</p>
            </div>
          ))}
        </div>

        <div className="info-card">
          <h3>{language === "EN" ? "Personal Traits" : "Cechy osobiste"}</h3>
          <div className="tags">
            {tSkills.traits.map((trait, idx) => (
              <span key={idx} className="tag">{trait}</span>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h3>{language === "EN" ? "Languages" : "Znajomość języków"}</h3>
          <div className="tags">
            {tSkills.languages.map((lang, idx) => (
              <span key={idx} className="tag">{lang.language} ({lang.level})</span>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h3>{language === "EN" ? "Interests" : "Zainteresowania"}</h3>
          <div className="tags">
            {tSkills.interests.map((int, idx) => (
              <span key={idx} className="tag">{int}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;