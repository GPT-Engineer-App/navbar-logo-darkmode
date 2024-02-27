import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="brand.900" color="white">
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          Company Name
        </Text>
      </Flex>

      <Box
        display={{ sm: "block", md: "none" }}
        onClick={() => {
          /* Function to handle mobile menu */
        }}
      >
        {/* Here will go an icon for the mobile menu */}
      </Box>

      <Box display={{ sm: "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Flex align="center" justify="flex-end">
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          {/* Additional links or components for the navbar */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
