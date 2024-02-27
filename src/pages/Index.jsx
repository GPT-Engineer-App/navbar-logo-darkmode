import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="flex-end" padding={4} bg="gray.900" color="white" shadow="md">
      {/* Dark Mode Switch */}
      <Switch id="dark-mode-switch" colorScheme="purple" isChecked={colorMode === "dark"} onChange={toggleColorMode}>
        {colorMode === "dark" ? <FaSun marginLeft="2" /> : <FaMoon marginLeft="2" />}
      </Switch>
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
