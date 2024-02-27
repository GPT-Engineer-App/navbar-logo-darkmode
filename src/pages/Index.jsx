// Remove duplicate Navbar and Index components and add missing imports for Navbar

import React from "react";
import { Box, Flex, IconButton, useColorMode, Heading, Text } from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun, FaUser } from "react-icons/fa";
import Section from "./Section";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md" width="full" zIndex={10}>
      <IconButton aria-label="Menu" variant="ghost" icon={<FaBars />} mr="auto" />
      <Flex ml="auto" color={colorMode === "light" ? "black" : "white"}>
        <IconButton aria-label="Profile" variant="ghost" icon={<FaUser />} mr="2" />
        <IconButton aria-label="Toggle dark mode" variant="ghost" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Flex>
    </Flex>
  );
};

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Box pt="100px" p={5}>
        <Section title="Section 1" description="Description for Section 1" />
        <Section title="Section 2" description="Description for Section 2" />
        <Section title="Section 3" description="Description for Section 3" />
        <Section title="Section 4" description="Description for Section 4" />
        <Section title="Section 5" description="Description for Section 5" />
      </Box>
    </Box>
  );
};

export default Index;

// Removed duplicate Navbar and Index components
