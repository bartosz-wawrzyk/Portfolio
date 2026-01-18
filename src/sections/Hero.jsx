import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <Section id="hero">
      <Content>
        <Headline>Software Engineer | SQL, Python & React</Headline>
        <SubHeadline>
          On a daily basis, I optimize production systems powered by SQL and legacy technologies. 
          After hours, I build modern Fullstack applications, including production-ready projects 
          like <strong>Domator</strong>, leveraging Python, FastAPI, and React.
        </SubHeadline>
        <CTAContainer>
          <CTAButton onClick={() => scrollToSection("projects")}>
            View My Projects
          </CTAButton>
          <Icons>
            <a
              href="https://github.com/bartosz-wawrzyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bartosz-wawrzyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </Icons>
        </CTAContainer>
      </Content>
    </Section>
  );
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const NAV_HEIGHT = 64;
  window.scrollTo({
    top: el.offsetTop - NAV_HEIGHT,
    behavior: "smooth",
  });
};

/* =========================
   Styled Components
   ========================= */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  max-width: 700px;
  text-align: center;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const SubHeadline = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  padding: 0.75rem 1.5rem;
  color: #0d1117;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background-color: #3b78d8;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default Hero;
