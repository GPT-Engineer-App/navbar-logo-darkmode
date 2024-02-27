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
      <Box pt="16" p={5}>
        {" "}
        {/* Increased padding-top to avoid overlapping with the fixed Navbar */}
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Our Website
        </Heading>
        <Text fontSize="lg">Discover the most amazing content here on our platform. Stay tuned for more updates.</Text>
      </Box>
      <Section title="Section 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Section title="Section 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Section title="Section 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Section title="Section 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Section title="Section 5" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      {/* Rest of the page content would continue here */}
    </Box>
  );
};

export default Index;

// Removed duplicate Navbar and Index components
