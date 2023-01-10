import { PanelBody } from "../../Panel/PanelBody/PanelBody";
import { PanelFooter } from "../../Panel/PanelFooter/PanelFooter";
import { ModalCloseButton } from "./ModalCloseButton/ModalCloseButton";
import { ModalHeader } from "./ModalHeader/ModalHeader";
import { ModalRoot } from "./ModalRoot/ModalRoot";

export const Modal = {
	Root: ModalRoot,
	Header: ModalHeader,
	Body: PanelBody,
	Footer: PanelFooter,
	CloseButton: ModalCloseButton,
};
