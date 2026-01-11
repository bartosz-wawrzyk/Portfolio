import React, { useState } from "react";
import { useLanguage } from "../App";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";

const Projects = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const langKey = language.toUpperCase();

  const tStatus = {
    completed: langKey === "PL" ? "✅ Ukończony" : "✅ Completed",
    inProgress: langKey === "PL" ? "🚧 W trakcie realizacji" : "🚧 In progress"
  };

  const sortedProjects = [...projectsData]
  .sort((a, b) => {
    if (a.status === b.status) return 0;
    if (a.status === "inProgress") return -1;
    if (b.status === "inProgress") return 1;
    return 0;
  })
  .sort((a, b) => {
    if (a.status === "completed" && b.status === "completed") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="projects-content">
      <h1>{langKey === "PL" ? "Moje Projekty" : "My Projects"}</h1>
      <div className="projects-grid">
        {sortedProjects.map((project, idx) => (
          <div
            key={idx}
            className={`project-card ${project.status === "completed" ? "completed" : "in-progress"}`}
            onClick={() => handleOpenModal(project)}
          >
            <h3>{project.name[langKey]}</h3>
            <p>{project.description[langKey]}</p>
            <span className={`status-badge ${project.status === "completed" ? "completed" : "in-progress"}`}>
              {tStatus[project.status]}
            </span>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✖</button>
            <h2>{selectedProject.name[langKey]}</h2>
            
            <span className={`status-badge ${selectedProject.status === "completed" ? "completed" : "in-progress"}`}>
              {tStatus[selectedProject.status]}
            </span>

            {selectedProject.screenshot && (
              <img src={selectedProject.screenshot} alt="Screenshot" className="modal-image" />
            )}

            <p className="modal-description">{selectedProject.description[langKey]}</p>
            
            <div className="modal-tech">
              <strong>{langKey === "PL" ? "Technologie:" : "Technologies:"}</strong>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  {langKey === "PL" ? "Zobacz na GitHub" : "View on GitHub"}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;