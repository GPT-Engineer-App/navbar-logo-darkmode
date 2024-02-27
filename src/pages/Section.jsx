import React, { forwardRef } from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Section = forwardRef(({ id, title, description, showDivider = true }, ref) => {
  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
      {showDivider && <Divider mt={6} mb={-3} />}
    </Box>
  );
});

export default React.memo(Section);
