import React, { useState } from "react";
import "../styles/Projects.css";
import farmhome from "../assets/farmhome.png";
import farmlogin from "../assets/farmlogin.png";
import farmcalculator from "../assets/farmcalculator.png";
import budgetlogin from "../assets/budgetlogin.png";
import budgethome from "../assets/budgethome.png";

const Projects = ({ language }) => {
  const content = {
    PL: {
      title: "Moje Projekty",
      categories: {
        javafx: "JavaFX",
        spring: "Spring Boot + React",
        python: "Python / Data Science",
      },
      status: {
        completed: "✅ Ukończony",
        inProgress: "🚧 W trakcie realizacji",
      },
      techLabel: "Technologie",
      github: "Zobacz na GitHub",
      demo: "Live Demo",
      close: "Zamknij",
    },
    EN: {
      title: "My Projects",
      categories: {
        javafx: "JavaFX",
        spring: "Spring Boot + React",
        python: "Python / Data Science",
      },
      status: {
        completed: "✅ Completed",
        inProgress: "🚧 In progress",
      },
      techLabel: "Technologies",
      github: "View on GitHub",
      demo: "Live Demo",
      close: "Close",
    },
  };

  const t = content[language];

  const projectsData = {
    javafx: [
      {
        name: {
          PL: "Aplikacja do zarządzania budżetem domowym",
          EN: "Home Budget Management Application",
        },
        description: {
          PL: "Aplikacja do zarządzania domowym budżetem, posiłkami, finansami, terminami itp.",
          EN: "Application for managing home budget, meals, finances, and schedules.",
        },
        status: "completed",
        technologies: ["JavaFX", "PostgreSQL"],
        github: "https://github.com/bartosz-wawrzyk/BudgetApp",
        screenshots: [budgetlogin, budgethome],
      },
      {
        name: {
          PL: "Aplikacja do zarządzania gospodarstwem domowym",
          EN: "Home Management Application",
        },
        description: {
          PL: "Projekt inżynierski – kompleksowe narzędzie do zarządzania gospodarstwem domowym.",
          EN: "Engineering project – a complete tool for home management.",
        },
        status: "completed",
        technologies: ["JavaFX", "PostgreSQL"],
        github: "https://github.com/bartosz-wawrzyk/FarmManagementSystem",
        screenshots: [farmlogin, farmhome, farmcalculator],
      },
      {
        name: {
          PL: "Planer domowych rzeczy",
          EN: "Home Planner",
        },
        description: {
          PL: "Aplikacja w trakcie realizacji – planowanie posiłków, finansów, kredytów, przypomnień.",
          EN: "App in progress – plan meals, finances, credits, and reminders.",
        },
        status: "inProgress",
        technologies: ["JavaFX", "PostgreSQL"],
        github: "https://github.com/bartosz-wawrzyk/Domator-App",
        screenshots: [""],
      },
    ],
    spring: [
      {
        name: {
          PL: "Projekt Full-stack",
          EN: "Full-stack Project",
        },
        description: {
          PL: "Projekt w trakcie realizacji w technologii Spring Boot + React.",
          EN: "Work in progress using Spring Boot and React.",
        },
        status: "inProgress",
        technologies: ["Spring Boot", "React"],
        github: "#",
        screenshots: [""],
      },
    ],
    python: [
      {
        name: {
          PL: "Praca magisterska – analiza danych",
          EN: "Master's Thesis – Data Analysis",
        },
        description: {
          PL: "Analiza danych i wizualizacja wyników w Jupyter Notebook.",
          EN: "Data analysis and visualization in Jupyter Notebook.",
        },
        status: "completed",
        technologies: ["Python", "Pandas", "Matplotlib"],
        github: "#",
        screenshots: [""],
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("javafx");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  };

  const handleCloseModal = () => setSelectedProject(null);

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(
        (currentScreenshot + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(
        (currentScreenshot - 1 + selectedProject.screenshots.length) %
          selectedProject.screenshots.length
      );
    }
  };

  return (
    <div className="projects-content">
      <h1>{t.title}</h1>
      <div className="projects-layout">
        <aside className="projects-sidebar">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              className={`category-btn ${
                selectedCategory === key ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </button>
          ))}
        </aside>

        <div className="projects-grid">
          {projectsData[selectedCategory].map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              onClick={() => handleOpenModal(project)}
            >
              <h3>{project.name[language]}</h3>
              <p>{project.description[language]}</p>
              <span
                className={`status-badge ${
                  project.status === "completed" ? "completed" : "in-progress"
                }`}
              >
                {t.status[project.status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✖</button>
            <h2>{selectedProject.name[language]}</h2>
            <div className="modal-status">
              <span className={`status-badge ${selectedProject.status === "completed" ? "completed" : "in-progress"}`}>
                {t.status[selectedProject.status]}
              </span>
            </div>

            <div className="modal-slider">
              <button className="nav-btn prev" onClick={prevScreenshot}>◀</button>
              <img
                src={selectedProject.screenshots[currentScreenshot]}
                alt="Screenshot"
                className="modal-image"
              />
              <button className="nav-btn next" onClick={nextScreenshot}>▶</button>
            </div>

            <p className="modal-description">{selectedProject.description[language]}</p>

            <div className="modal-tech">
              <strong>{t.techLabel}:</strong>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">{t.github}</a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">{t.demo}</a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
