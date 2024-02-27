import React from "react";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md">
      <Flex align="center">
        {/* Placeholder for profile content */}
        <Box as="span" marginEnd="4" display="flex" alignItems="center" justifyContent="center">
          <FaUser />
        </Box>
      </Flex>
      <Flex align="center" justify="flex-end">
        <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
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
