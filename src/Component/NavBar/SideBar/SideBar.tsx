import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "../../Image/Image";
import man from "../../../Assets/me.jpg";
import Logo from "src/Component/Logo/Logo";
interface DrawerPropEl {
  content1?: any;
  content2?: any;
  isOpen?: any;
  onOpen?: any;
  onClose?: any;
}
export const SideBar = ({
  content1,
  content2,
  isOpen,
  onOpen,
  onClose,
}: DrawerPropEl) => {
  return (
    <Box
      display={{ base: "block", lg: "grid" }}
      gridTemplateColumns={"30% 70%"}
    >
      <Box>
        <Box display={{ base: "block", lg: "none" }}>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton className="text-white" />
              <DrawerHeader>
                <Box mt={"-96px"}></Box>
              </DrawerHeader>
              <DrawerBody>{content1}</DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box
          pos={"fixed"}
          boxShadow={"lg"}
          className="pt-12 pl-3 border"
          height={"100%"}
          w={"270px"}
          display={{ base: "none", lg: "block" }}
        >
          <div>
            <Logo />
          </div>
          <div>{content2}</div>
        </Box>
      </Box>
    </Box>
  );
};
