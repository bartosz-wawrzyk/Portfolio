import styled from "styled-components";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <Content>
        <Paragraph>
          I am a Software Engineer specializing in delivering solutions at the intersection of stable enterprise-grade systems and modern web technologies. 
          My professional journey began with mission-critical HR and payroll systems, where data integrity and business logic reliability are paramount. 
          This environment taught me that code should be written primarily with long-term maintainability and production stability in mind.
        </Paragraph>

        <Paragraph>
          In my daily role as an Implementation Engineer, I focus on SQL databases (MS SQL, PostgreSQL) and Tier 3 (L3) technical support. 
          This experience allows me to navigate complex database structures with ease, optimize queries, and debug issues that go far beyond standard syntax errors. 
          Working with legacy technologies like Pascal and C++ has given me a unique understanding of how software ages and which architectural decisions protect a system from excessive technical debt.
        </Paragraph>

        <Paragraph>
          Currently, my primary focus is the modern fullstack ecosystem: Python (FastAPI, Django) and React with TypeScript. 
          I leverage these tools to build applications that are not only fast and responsive but also built on a solid, scalable backend foundation. 
          My approach combines the analytical mindset of a Data Science graduate with the pragmatism of an engineer who knows what it takes to keep a system running in a production environment.
        </Paragraph>

        <EducationSection>
          <IntroText>
            My academic background provides a strong theoretical foundation for my practical skills:
          </IntroText>

          <EducationList>
            <li><strong>Master of Science (MSc):</strong> Cracow University of Technology, Field: Data Science (2023–2025)</li>
            <li><strong>Bachelor of Engineering (BEng):</strong> Kielce University of Technology, Field: Computer Science, Specialization: Information Systems (2019–2023)</li>
          </EducationList>
        </EducationSection>

        <Paragraph>
          In both my professional work and personal projects, I prioritize code readability and predictable architecture. 
          I don't chase the latest libraries for the sake of novelty; instead, I select tools that best solve the specific business problem at hand. 
          I believe that a developer's role is not just to write lines of code, but to ensure that the entire system remains stable, scalable, and ready for future challenges.
        </Paragraph>
      </Content>
    </Section>
  );
};

export default AboutMe;

/* =========================
   Styled Components
   ========================= */

const Section = styled.section`
  min-height: 80vh;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const EducationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const IntroText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const EducationList = styled.ul`
  margin: 0.5rem 0 0 1.5rem;
  padding: 0;
  list-style-type: disc;
  color: ${({ theme }) => theme.colors.textSecondary};

  li {
    margin-bottom: 0.25rem;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;