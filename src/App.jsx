import React, { createContext, useContext, useState } from "react";
import "./styles/App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const App = () => {
  const [language, setLanguage] = useState("EN");
  const [activeMenu, setActiveMenu] = useState("about");

  const toggleLanguage = () => setLanguage(language === "EN" ? "PL" : "EN");

  const translations = {
    PL: {
      menu: {
        about: "O mnie",
        experience: "Doświadczenie",
        skills: "Umiejętności",
        projects: "Projekty",
        contact: "Kontakt"
      },
      footer: "© {year} Portfolio | Wszystkie prawa zastrzeżone",
      portfolio: "Portfolio"
    },
    EN: {
      menu: {
        about: "About Me",
        experience: "Experience",
        skills: "Skills",
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
    { key: "experience", value: t.menu.experience },
    { key: "skills", value: t.menu.skills },
    { key: "projects", value: t.menu.projects },
    { key: "contact", value: t.menu.contact }
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "about":
        return <Home />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
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

        <main className="content">{renderContent()}</main>

        <footer className="footer">
          <p>{t.footer.replace("{year}", new Date().getFullYear())}</p>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;