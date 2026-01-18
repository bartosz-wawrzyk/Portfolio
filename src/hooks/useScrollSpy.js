import { useEffect, useState } from "react";

/**
 * useScrollSpy
 * @param {string[]} sectionIds - ordered list of section IDs
 * @param {number} offset - offset for sticky navbar height
 */
export const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          setActiveId(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
