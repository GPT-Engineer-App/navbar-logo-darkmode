import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Section = ({ title, description }) => {
  return (
    <Box p={5} my={4}>
      <Heading as="h2" size="lg" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
};

export default Section;
