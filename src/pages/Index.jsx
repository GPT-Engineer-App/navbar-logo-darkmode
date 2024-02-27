import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  return <Flex as="nav" align="center" justify="space-between" padding="4" color="white" shadow="md"></Flex>;
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
