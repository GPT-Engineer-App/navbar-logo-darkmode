import React from "react";
import { Box, Flex, Image, Spacer, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="space-between" padding={4} bg="gray.100" color="black" shadow="md">
      {/* Logo */}
      <Box>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcwOTAwMjk0NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" boxSize="50px" />
      </Box>

      {/* Right section */}
      <Flex align="center">
        {/* Profile Image */}
        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MDkwMDI5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" borderRadius="full" boxSize="40px" marginRight={4} />

        {/* Dark Mode Switch */}
        <Switch id="dark-mode-switch" colorScheme="purple" isChecked={colorMode === "dark"} onChange={toggleColorMode} icon={colorMode === "dark" ? <FaMoon /> : <FaSun />} />
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
