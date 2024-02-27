import React, { useRef } from "react";
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Button, useColorModeValue } from "@chakra-ui/react";

function Sidebar({ isOpen, onClose, sections, activeSection }) {
  const btnRefs = useRef({});
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
        <DrawerBody>
          <VStack p={5} display="flex" flexDirection="column" alignItems="flex-start">
            {sections.map((section) => (
              <Button
                key={section.id}
                w="full"
                variant="ghost"
                ref={(el) => (btnRefs.current[section.id] = el)}
                onClick={() => {
                  onClose();
                  document.getElementById(section.id).scrollIntoView({ behavior: "smooth" });
                }}
                backgroundColor={activeSection === section.id ? useColorModeValue("gray.200", "gray.700") : undefined}
              >
                {section.title}
              </Button>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
