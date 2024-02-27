import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Section = ({ title, description }) => {
  return (
    <Box p={5} my={0}>
      <Heading as="h2" size="lg" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
      <Divider mt={6} mb={0} />
    </Box>
  );
};

export default Section;
