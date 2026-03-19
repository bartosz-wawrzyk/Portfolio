import styled from "styled-components";
import { FaPython, FaReact, FaDocker, FaGitAlt, FaDatabase, FaChartBar, FaCode } from "react-icons/fa";
import { SiFastapi, SiDjango, SiPostgresql, SiJavascript, SiPandas } from "react-icons/si";

const skillsData = {
  "Backend Ecosystem": [
    { name: "Python", icon: <FaPython /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "C++", icon: <FaCode /> },
    { name: "Pascal", icon: <FaCode /> },
  ],
  "Frontend Development": [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
    { name: "Vite", icon: <FaReact /> },											 
  ],
  "Data & Infrastructure": [
    { name: "SQL (MS SQL, PostgreSQL)", icon: <FaDatabase /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git / GitHub", icon: <FaGitAlt /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Matplotlib", icon: <FaChartBar /> },
  ],
};

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillColumn key={category}>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {skills.map((skill, idx) => (
              <SkillItem key={idx}>
                <IconWrapper>{skill.icon}</IconWrapper>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillColumn>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;

/* =========================
   Styled Components
   ========================= */

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 300px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  padding-bottom: 0.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;