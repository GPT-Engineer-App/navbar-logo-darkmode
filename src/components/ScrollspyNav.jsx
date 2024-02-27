import React, { useState, useEffect } from "react";
import { Box, Link, Stack } from "@chakra-ui/react";

const ScrollspyNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let foundActiveSection = sections[0].id;

      for (const section of sections) {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { top } = sectionElement.getBoundingClientRect();
          if (top >= 0 && top <= window.innerHeight / 2) {
            foundActiveSection = section.id;
            break;
          }
        }
      }

      setActiveSection(foundActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Stack as="nav" spacing={4} position="fixed" top="100px" left={0} zIndex={1}>
      {sections.map((section) => (
        <Link key={section.id} href={`#${section.id}`} color={activeSection === section.id ? "blue.500" : "gray.500"} _hover={{ color: "blue.300" }}>
          {section.title}
        </Link>
      ))}
    </Stack>
  );
};

export default ScrollspyNav;
