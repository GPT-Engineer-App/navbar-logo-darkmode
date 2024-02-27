import React from "react";
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Button } from "@chakra-ui/react";

function Sidebar({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
        <DrawerBody>
          <VStack p={5} display="flex" flexDirection="column" alignItems="flex-start">
            <Button w="full" variant="ghost" onClick={onClose}>
              Section 1
            </Button>
            <Button w="full" variant="ghost" onClick={onClose}>
              Section 2
            </Button>
            <Button w="full" variant="ghost" onClick={onClose}>
              Section 3
            </Button>
            <Button w="full" variant="ghost" onClick={onClose}>
              Section 4
            </Button>
            <Button w="full" variant="ghost" onClick={onClose}>
              Section 5
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
