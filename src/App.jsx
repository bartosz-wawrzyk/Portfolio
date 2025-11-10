import React, { useState } from "react";
import "./styles/App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [language, setLanguage] = useState("PL");
  const [activeMenu, setActiveMenu] = useState("about");

  const toggleLanguage = () => setLanguage(language === "PL" ? "EN" : "PL");

  const translations = {
    PL: {
      menu: {
        about: "O mnie",
        skills: "Umiejętności",
        experience: "Doświadczenie",
        projects: "Projekty",
        contact: "Kontakt"
      },
      footer: "© {year} Portfolio | Wszystkie prawa zastrzeżone",
      portfolio: "Portfolio"
    },
    EN: {
      menu: {
        about: "About Me",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      footer: "© {year} Portfolio | All rights reserved",
      portfolio: "Portfolio"
    }
  };

  const t = translations[language];

  const menuItems = [
    { key: "about", value: t.menu.about },
    { key: "skills", value: t.menu.skills },
    { key: "experience", value: t.menu.experience },
    { key: "projects", value: t.menu.projects },
    { key: "contact", value: t.menu.contact }
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "about":
        return <Home language={language} />;
      case "skills":
        return <Skills language={language} />;
      case "experience":
        return <Experience language={language} />;
      case "projects":
        return <Projects language={language} />;
      case "contact":
        return <Contact language={language} />;
      default:
        return <Home language={language} />;
    }
  };

  return (
    <div className={`app`}>
      <nav className="navbar">
        <div className="navbar-left">
          <h2>{t.portfolio}</h2>
        </div>
        <div className="navbar-center">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${activeMenu === item.key ? "active" : ""}`}
              onClick={() => setActiveMenu(item.key)}
            >
              {item.value}
            </button>
          ))}
        </div>
        <div className="navbar-right">

          <button onClick={toggleLanguage} className="lang-btn">
            {language}
          </button>
        </div>
      </nav>

      <main className="content">
        {renderContent()}
      </main>

      <footer className="footer">
        <p>{t.footer.replace("{year}", new Date().getFullYear())}</p>
      </footer>
    </div>
  );
};

export default App;