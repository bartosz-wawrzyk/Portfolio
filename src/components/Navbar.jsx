import styled from "styled-components";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_HEIGHT = 64;

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

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

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Navbar = () => {
  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    NAV_HEIGHT
  );

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - NAV_HEIGHT,
      behavior: "smooth",
    });
  };

  return (
    <Nav>
      <Logo>[B.W]</Logo>
      <NavList>
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

export default Navbar;
