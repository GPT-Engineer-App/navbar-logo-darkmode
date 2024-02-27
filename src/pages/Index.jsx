// Remove duplicate Navbar and Index components and add missing imports for Navbar

import React from "react";
import { Box, Flex, IconButton, useColorMode, Heading, Text } from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun, FaUser } from "react-icons/fa";
import Section from "./Section";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md" position="fixed" width="full" top="0" zIndex="sticky">
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
      <Box pt="24" p={5}></Box>

      {/* Rest of the page content would continue here */}
    </Box>
  );
};

export default Index;

// Removed duplicate Navbar and Index components
