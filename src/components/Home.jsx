import React from "react";
import profilePhoto from "../assets/profile.png";
import "../styles/Home.css";

const Home = ({ language }) => {
  const content = {
    PL: {
      title: "Bartosz Wawrzyk",
      position: "Specjalista ds. wdrożeń",
      description: "Jestem specjalistą ds. wdrożeń z pasją do programowania i rozwiązywania złożonych problemów. W pracy zawodowej zajmuję się implementacją systemów informatycznych, testowaniem oprogramowania oraz wsparciem klientów. Moja główna wiedza programistyczna pochodzi z własnych projektów i ciągłego doskonalenia umiejętności.",
      education: {
        title: "Wykształcenie",
        items: [
          {
            school: "POLITECHNIKA KRAKOWSKA",
            period: "2023 - 2025",
            field: "KIERUNEK: INFORMATYKA",
            specialization: "SPECJALIZACJA: DATA SCIENCE"
          },
          {
            school: "POLITECHNIKA ŚWIĘTOKRZYSKA",
            period: "2019 - 2023",
            field: "KIERUNEK: INFORMATYKA",
            specialization: "SPECJALIZACJA: SYSTEMY INFORMACYJNE"
          },
          {
            school: "ZESPÓŁ SZKÓŁ TECHNICZNO - INFORMATYCZNYCH W BUSKU - ZDROJU",
            period: "2015 - 2019",
            field: "KIERUNEK: TECHNIK INFORMATYK",
            specialization: "KWALIFIKACJE: E12, E13, E14"
          }
        ]
      },
      personal: {
        title: "Cechy osobiste",
        traits: ["myślenie analityczne", "umiejętność współpracy", "pracowitość", "odpowiedzialność", "dobre zarządzanie czasem", "łatwość uczenia się", "otwartość na zmiany"]
      },
      languages: {
        title: "Znajomość języków",
        items: [
          { language: "angielski", level: "poziom średnio zaawansowany" },
          { language: "polski", level: "ojczysty" }
        ]
      },
      interests: {
        title: "Zainteresowania",
        items: ["programowanie", "informatyka", "elektronika", "sporty indywidualne", "sporty drużynowe", "gry komputerowe", "nowe technologie"]
      }
    },
    EN: {
      title: "Bartosz Wawrzyk",
      position: "Implementation Specialist",
      description: "I am an implementation specialist with a passion for programming and solving complex problems. In my professional work, I focus on implementing IT systems, software testing, and client support. My main programming knowledge comes from personal projects and continuous skill improvement.",
      education: {
        title: "Education",
        items: [
          {
            school: "CRACOW UNIVERSITY OF TECHNOLOGY",
            period: "2023 - 2025",
            field: "FIELD: COMPUTER SCIENCE",
            specialization: "SPECIALIZATION: DATA SCIENCE"
          },
          {
            school: "KIELCE UNIVERSITY OF TECHNOLOGY",
            period: "2019 - 2023",
            field: "FIELD: COMPUTER SCIENCE",
            specialization: "SPECIALIZATION: INFORMATION SYSTEMS"
          },
          {
            school: "TECHNICAL AND IT SCHOOL COMPLEX IN BUSKO-ZDRÓJ",
            period: "2015 - 2019",
            field: "FIELD: IT TECHNICIAN",
            specialization: "QUALIFICATIONS: E12, E13, E14"
          }
        ]
      },
      personal: {
        title: "Personal Traits",
        traits: ["analytical thinking", "teamwork skills", "hard work", "responsibility", "good time management", "fast learning", "openness to changes"]
      },
      languages: {
        title: "Languages",
        items: [
          { language: "English", level: "intermediate level" },
          { language: "Polish", level: "native" }
        ]
      },
      interests: {
        title: "Interests",
        items: ["programming", "IT", "electronics", "individual sports", "team sports", "computer games", "new technologies"]
      }
    }
  };

  const t = content[language];

  return (
    <div className="home-content">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={profilePhoto} alt="Bartosz Wawrzyk" className="profile-image" />
        </div>
        <div className="profile-info">
          <h1>{t.title}</h1>
          <h2>{t.position}</h2>
          <p>{t.description}</p>
        </div>
      </div>
      
      <div className="home-grid">
        <div className="info-card education-card">
          <h3>{t.education.title}</h3>
          <div className="education-list">
            {t.education.items.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <span className="education-icon">🎓</span>
                  <div className="education-school">
                    <strong>{edu.school}</strong>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
                <div className="education-details">
                  <p>{edu.field}</p>
                  <p>{edu.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card personal-card">
          <h3>{t.personal.title}</h3>
          <div className="traits-list">
            {t.personal.traits.map((trait, index) => (
              <span key={index} className="trait-tag">{trait}</span>
            ))}
          </div>
        </div>

        <div className="info-card languages-card">
          <h3>{t.languages.title}</h3>
          <div className="languages-list">
            {t.languages.items.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-flag">🌍</span>
                <div className="language-info">
                  <strong>{lang.language}</strong>
                  <span>{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card interests-card">
          <h3>{t.interests.title}</h3>
          <div className="interests-list">
            {t.interests.items.map((interest, index) => (
              <span key={index} className="interest-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;