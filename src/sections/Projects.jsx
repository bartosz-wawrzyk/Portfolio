import styled from "styled-components";

const projectsData = [
  {
    title: "Domator - Home Management System",
    description:
      "A household management application. It enables task organization, user management, and data access through a modern React frontend and FastAPI backend.",
    challenge:
      "Designed fullstack architecture with React frontend and FastAPI backend, containerized with Docker.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/bartosz-wawrzyk/Domator",
  },
  {
    title: "Master's Thesis – Data Analysis",
    description:
      "Analysis and comparison of object detection algorithms: YOLO, SSD, R-CNN. Evaluation of mAP accuracy, processing time, and efficiency in different conditions.",
    challenge:
      "Performed detailed performance analysis and comparison of object detection algorithms under varying conditions.",
    stack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <CardsContainer>
        {projectsData.map((proj, index) => (
          <Card key={index}>
            <CardContent>
              <CardTitle>{proj.title}</CardTitle>
              <CardDescription>{proj.description}</CardDescription>
              <CardChallenge>{proj.challenge}</CardChallenge>
              <Stack>
                {proj.stack.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </Stack>
              <Links>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Links>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Projects;

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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const CardChallenge = styled.p`
  font-size: 0.85rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0.25rem 0;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;