import styled from "styled-components";

const experienceData = [
  {
    role: "Implementation Specialist",
    company: "Korelacja - Systemy Informatyczne Sp. z o.o.",
    period: "08.2023 - Present",
    responsibilities: [
      "End-to-end implementation of HR and payroll systems for enterprise clients",
      "Software testing and quality assurance prior to deployment",
      "Designing and optimizing SQL queries on MS SQL and PostgreSQL databases",
      "Developing business reports and analytics tools using Pascal and C++",
      "Client training and consultation on system functionalities",
      "Providing advanced L3 technical support and problem resolution",
    ],
  },
  {
    role: "Student Internship",
    company: "Intester Sp. z o.o.",
    period: "09.2022",
    responsibilities: [
      "Analyzed and interpreted technical drawings to support project planning",
      "Managed documentation flow to ensure compliance and traceability",
      "Collaborated with engineering team on task execution and process improvements",
      "Utilized AutoCAD for drafting and technical visualization",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experienceData.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelinePeriod>{exp.period}</TimelinePeriod>
            <TimelineContent>
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Responsibilities>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Responsibilities>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;

/* =========================
   Styled Components
   ========================= */
   
const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 0.5rem;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
  }
`;

const TimelinePeriod = styled.span`
  min-width: 120px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Company = styled.p`
  margin: 0.25rem 0 0.5rem 0;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Responsibilities = styled.ul`
  margin: 0;
  padding-left: 1rem;
  list-style-type: disc;
  color: ${({ theme }) => theme.colors.textSecondary};

  li {
    margin-bottom: 0.25rem;
  }
`;