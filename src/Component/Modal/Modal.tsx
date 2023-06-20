import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Heading,
} from "@chakra-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface props {
  children?: any;
  FooterChildren?: any;
  isOpen?: any;
  onOpen?: any;
  onClose?: any;
  showCloseIcon?: boolean;
  size?: string;
  dismissOnclickOutside?: boolean;
  title?: string;
}
export const ModalComp = ({
  children,
  FooterChildren,
  isOpen,
  onClose,
  onOpen,
  showCloseIcon = true,
  size = "sm",
  dismissOnclickOutside = true,
  title,
}: props) => {
  return (
    <>
      <Modal
        size={size}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent className="p-4">
          <Heading size={"lg"}>{title}</Heading>
          {showCloseIcon ? <ModalCloseButton /> : ""}
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{FooterChildren}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
