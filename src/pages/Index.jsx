import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md">
      <Box>
        <FaBars marginRight="4" />
      </Box>
      {/* Dark Mode Switch is moved next to the mode icon */}
      {/* Dark Mode Switch */}
      {colorMode === "dark" ? <FaSun /> : <FaMoon color={useColorModeValue("black", "white")} />}
      <Switch id="dark-mode-switch" colorScheme="purple" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
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
