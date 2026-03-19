import { useState } from "react";
import styled from "styled-components";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_HEIGHT = 64;

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    NAV_HEIGHT
  );

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsOpen(false);
    window.scrollTo({
      top: element.offsetTop - NAV_HEIGHT,
      behavior: "smooth",
    });
  };

  return (
    <Nav>
      <Logo>[B.W]</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <NavList $isOpen={isOpen}>
        {sections.map(({ id, label }) => (
          <NavItem
            key={id}
            $active={activeSection === id}
            onClick={() => handleScrollTo(id)}
          >
            {label}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

/* =========================
   Styled Components
   ========================= */
const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 64px;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
`;

const Logo = styled.div`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out;
    z-index: 998;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.surface};
    padding: 80px 2rem 2rem 2rem;
    gap: 2rem;
    z-index: 999;

    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-100%)")};
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export default Navbar;