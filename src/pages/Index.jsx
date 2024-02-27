import React from "react";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md">
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
      {/* Rest of the page content would go here */}
    </Box>
  );
};

export default Index;
