import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Content>
        <Paragraph>
          You can reach me via email:{" "}
          <Email href="mailto:bartoszwawrzyk888@gmail.com">bartoszwawrzyk888@gmail.com</Email>
        </Paragraph>
        <Socials>
          <SocialLink href="https://github.com/bartosz-wawrzyk" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/bartosz-wawrzyk/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </SocialLink>
        </Socials>
      </Content>
      <FooterNote>
        Built with <strong>React & Vite</strong>. Deployed on GitHub Pages.
      </FooterNote>
    </Section>
  );
};

export default Contact;

/* =========================
   Styled Components
   ========================= */

const Section = styled.section`
  min-height: 60vh;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

const Email = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const FooterNote = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;