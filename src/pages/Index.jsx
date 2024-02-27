import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="space-between" padding={4} bg="gray.100" color="black" shadow="md">
      {/* Right section */}
      <Flex align="center">
        {/* Dark Mode Switch */}
        <Switch id="dark-mode-switch" colorScheme="purple" isChecked={colorMode === "dark"} onChange={toggleColorMode}>
          {colorMode === "dark" ? <FaSun /> : <FaMoon />}
        </Switch>
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
