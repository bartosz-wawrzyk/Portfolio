import React from "react";
import "../styles/Experience.css";

const Experience = ({ language }) => {
  const content = {
    PL: {
      title: "Doświadczenie Zawodowe",
      experiences: [
        {
          position: "Specjalista ds. wdrożeń",
          company: "Korelacja - Systemy Informatyczne Sp. z o.o.",
          period: "08.2023 - Obecnie",
          responsibilities: [
            "Kompleksowa implementacja systemów kadrowo-płacowych dla klientów",
            "Testowanie i zapewnienie jakości oprogramowania przed wdrożeniem",
            "Tworzenie raportów biznesowych przy użyciu wewnętrznych narzędzi opartych na Pascal i C++",
            "Optymalizacja zapytań i praca z bazami danych MS SQL oraz PostgreSQL",
            "Konsultacje i szkolenia klientów z zakresu obsługi systemów kadrowych",
            "Rozwiązywanie problemów technicznych i wsparcie użytkowników końcowych"
          ]
        },
        {
          position: "Praktyka studencka",
          company: "Intester Sp. z. o. o",
          period: "09.2022",
          responsibilities: [
            "Praca z programem AutoCad",
            "Odczytywanie projektów",
            "Zarządzanie obiegiem dokumentów",
            "Realizacja zadań zleconych przez współpracowników"
          ]
        },
        {
          position: "Prace sezonowe",
          company: "",
          period: "2019 - 2022",
          responsibilities: [
            "Kierowca Taxi (2022)",
            "Monter Ociepleń Budynków (2021)",
            "Tynkarz (2019 - 2020)"
          ]
        }
      ]
    },
    EN: {
      title: "Work Experience",
      experiences: [
        {
          position: "Implementation Specialist",
          company: "Korelacja - Systemy Informatyczne Sp. z o.o.",
          period: "08.2023 - Present",
          responsibilities: [
            "Comprehensive implementation of HR and payroll systems for clients",
            "Software testing and quality assurance before deployment",
            "Creating business reports using internal tools based on Pascal and C++",
            "Query optimization and work with MS SQL and PostgreSQL databases",
            "Client consultations and training on HR system usage",
            "Technical problem solving and end-user support"
          ]
        },
        {
          position: "Student Internship",
          company: "Intester Sp. z. o. o",
          period: "09.2022",
          responsibilities: [
            "Working with AutoCad software",
            "Reading and interpreting technical drawings",
            "Document flow management",
            "Completing tasks assigned by colleagues"
          ]
        },
        {
          position: "Seasonal Work",
          company: "",
          period: "2019 - 2022",
          responsibilities: [
            "Taxi Driver (2022)",
            "Building Insulation Installer (2021)",
            "Plasterer (2019 - 2020)"
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="experience-content">
      <h1>{t.title}</h1>
      <div className="experiences-list">
        {t.experiences.map((exp, index) => (
          <div key={index} className="experience-item">
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
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
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