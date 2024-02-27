// Remove duplicate Navbar and Index components and add missing imports for Navbar

import React, { useState, useEffect } from "react";
import { Box, Flex, IconButton, useColorMode, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { FaBars, FaMoon, FaSun, FaUser } from "react-icons/fa";
import Section from "./Section";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md" width="full" zIndex={10}>
      <IconButton aria-label="Menu" variant="ghost" icon={<FaBars />} mr="auto" onClick={onOpen} />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Flex ml="auto" color={colorMode === "light" ? "black" : "white"}>
        <IconButton aria-label="Profile" variant="ghost" icon={<FaUser />} mr="2" />
        <IconButton aria-label="Toggle dark mode" variant="ghost" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Flex>
    </Flex>
  );
};

const sections = [
  { id: "section1", title: "Section 1" },
  { id: "section2", title: "Section 2" },
  { id: "section3", title: "Section 3" },
  { id: "section4", title: "Section 4" },
  { id: "section5", title: "Section 5" },
];

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Box pt="100px" p={5}>
        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} description={`Description for ${section.title}`} showDivider={section.title !== "Section 5"} />
        ))}
      </Box>
    </Box>
  );
};

export default Index;

// Removed duplicate Navbar and Index components
