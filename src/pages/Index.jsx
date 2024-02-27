import React from "react";
import { Box, Flex, IconButton, useColorMode, Heading, Text } from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md">
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
      <Box p={5}>
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Our Website
        </Heading>
        <Text fontSize="lg">Discover the most amazing content here on our platform. Stay tuned for more updates.</Text>
      </Box>
      {/* Rest of the page content would continue here */}
    </Box>
  );
};

export default Index;
