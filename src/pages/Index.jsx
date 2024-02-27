import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, IconButton, useColorMode, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import ScrollspyNav from "../components/ScrollspyNav";
import { FaBars, FaMoon, FaSun, FaUser } from "react-icons/fa";
import Section from "./Section";

const Navbar = () => {
  // ... Navbar component content ...
};

const sections = [
  // ... Existing sections ...
  { id: "call", title: "Call Section" },
];

const Index = () => {
  // ... Index component content ...

  return (
    <Box position="relative" maxW="1200px" mx="auto">
      <ScrollspyNav sections={sections} />
      <Navbar sections={sections} activeSection={activeSection} activeLinkColor={activeLinkColor} />
      <Box pt="100px" p={5}>
        {sections.map((section) => (section.id !== "call" ? <Section ref={sectionRefs.current[section.id]} key={section.id} id={section.id} title={section.title} description={`Description for ${section.title}`} showDivider={section.title !== "Section 5"} /> : <CallSection key={section.id} />))}
      </Box>
    </Box>
  );
};

export default Index;
