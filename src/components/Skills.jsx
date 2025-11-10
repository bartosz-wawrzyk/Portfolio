import React from "react";
import "../styles/Skills.css";

const Skills = ({ language }) => {
  const content = {
    PL: {
      title: "Umiejętności Techniczne",
      skills: [
        { name: "MS SQL", level: 80, description: "Dobra znajomość - praca z bazami danych w projektach zawodowych" },
        { name: "PostgreSQL", level: 75, description: "Dobra znajomość - wykorzystywany w projektach związanymi z danymi" },
        { name: "Java", level: 65, description: "Średnia znajomość - lepiej znam JavaFX, uczę się Spring Boot" },
        { name: "JavaFX", level: 70, description: "Średnio-zaawansowana znajomość - tworzenie aplikacji desktopowych" },
        { name: "Spring Boot", level: 40, description: "Podstawowa znajomość - w trakcie nauki" },
        { name: "HTML/CSS", level: 70, description: "Średnia znajomość - tworzenie interfejsów użytkownika" },
        { name: "JavaScript", level: 60, description: "Podstawowo-średnia znajomość - w trakcie rozwoju" },
        { name: "React", level: 45, description: "Podstawowa znajomość - aktualnie się uczę" },
        { name: "Node.js", level: 40, description: "Podstawowa znajomość - w trakcie nauki" },
        { name: "Git", level: 65, description: "Średnia znajomość - praca z kontrolą wersji" },
        { name: "Pascal/C++", level: 70, description: "Średnia znajomość - wykorzystywane w narzędziach wewnętrznych" }
      ]
    },
    EN: {
      title: "Technical Skills",
      skills: [
        { name: "MS SQL", level: 80, description: "Good knowledge - working with databases in professional projects" },
        { name: "PostgreSQL", level: 75, description: "Good knowledge - used in data-related projects" },
        { name: "Java", level: 65, description: "Intermediate knowledge - better with JavaFX, learning Spring Boot" },
        { name: "JavaFX", level: 70, description: "Intermediate-advanced knowledge - creating desktop applications" },
        { name: "Spring Boot", level: 40, description: "Basic knowledge - currently learning" },
        { name: "HTML/CSS", level: 70, description: "Intermediate knowledge - creating user interfaces" },
        { name: "JavaScript", level: 60, description: "Basic-intermediate knowledge - in development" },
        { name: "React", level: 45, description: "Basic knowledge - currently learning" },
        { name: "Node.js", level: 40, description: "Basic knowledge - in the learning process" },
        { name: "Git", level: 65, description: "Intermediate knowledge - working with version control" },
        { name: "Pascal/C++", level: 70, description: "Intermediate knowledge - used in internal tools" }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="skills-content">
      <h1>{t.title}</h1>
      <div className="skills-grid">
        {t.skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;