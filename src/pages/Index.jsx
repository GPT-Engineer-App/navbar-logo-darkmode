import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="flex-end" padding={4} bg={useColorModeValue("gray.200", "gray.900")} color="white" shadow="md">
      {/* Dark Mode Switch */}
      {colorMode === "dark" ? <FaSun marginRight="2" /> : <FaMoon marginRight="2" color={useColorModeValue("black", "white")} />}
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
