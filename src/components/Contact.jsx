import React from "react";
import "../styles/Contact.css";

const Contact = ({ language }) => {
  const content = {
    PL: {
      title: "Kontakt",
      description: "Zapraszam do kontaktu! Jestem otwarty na nowe wyzwania i możliwości współpracy w obszarze IT i wdrożeń systemowych.",
      email: "bartoszwawrzyk888@gmail.com",
      linkedin: "LinkedIn: Bartosz Wawrzyk",
      github: "GitHub: bartosz-wawrzyk",
      links: {
        github: "https://github.com/bartosz-wawrzyk",
        linkedin: "https://www.linkedin.com/in/bartosz-wawrzyk-92498a260/"
      }
    },
    EN: {
      title: "Contact",
      description: "Feel free to contact me! I'm open to new challenges and collaboration opportunities in IT and system implementations.",
      email: "bartoszwawrzyk888@gmail.com",
      linkedin: "LinkedIn: Bartosz Wawrzyk",
      github: "GitHub: bartosz-wawrzyk",
      links: {
        github: "https://github.com/bartosz-wawrzyk",
        linkedin: "https://www.linkedin.com/in/bartosz-wawrzyk-92498a260/"
      }
    }
  };

  const t = content[language];

  return (
    <div className="contact-content">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <div className="contact-info">
        <div className="contact-item">
          <strong>📧 Email: </strong> 
          <a href={`mailto:${t.email}`}>{t.email}</a>
        </div>
        <div className="contact-item">
          <strong>💼 LinkedIn: </strong> 
          <a href={t.links.linkedin} target="_blank" rel="noopener noreferrer">
            {t.linkedin.split(':')[1]}
          </a>
        </div>
        <div className="contact-item">
          <strong>🐙 GitHub: </strong> 
          <a href={t.links.github} target="_blank" rel="noopener noreferrer">
            {t.github.split(':')[1]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;