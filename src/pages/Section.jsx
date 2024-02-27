import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Section = ({ title, description }) => {
  return (
    <Box p={5} border="1px" borderColor="gray.200" my={4} borderRadius="md" bg="gray.50" shadow="sm">
      <Heading as="h2" size="lg" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
};

export default Section;
