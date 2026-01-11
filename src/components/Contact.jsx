import React from "react";
import { useLanguage } from "../App";
import generalData from "../data/general.json";
import "../styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const t = generalData[language].contact;

  return (
    <div className="contact-content">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <div className="contact-info">
        <div className="contact-item">
          <strong>📧 Email:</strong>
          <a href={`mailto:${t.email}`}>{t.email}</a>
        </div>
        <div className="contact-item">
          <strong>💼 LinkedIn:</strong>
          <a href={t.links.linkedin} target="_blank" rel="noopener noreferrer">
            {t.linkedin.split(":")[1].trim()}
          </a>
        </div>
        <div className="contact-item">
          <strong>🐙 GitHub:</strong>
          <a href={t.links.github} target="_blank" rel="noopener noreferrer">
            {t.github.split(":")[1].trim()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
