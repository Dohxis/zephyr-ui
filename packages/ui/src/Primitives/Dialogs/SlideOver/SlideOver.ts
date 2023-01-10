import { PanelBody } from "../../Panel/PanelBody/PanelBody";
import { PanelFooter } from "../../Panel/PanelFooter/PanelFooter";
import { ModalCloseButton } from "../Modal/ModalCloseButton/ModalCloseButton";
import { ModalHeader } from "../Modal/ModalHeader/ModalHeader";
import { SlideOverRoot } from "./SlideOverRoot/SlideOverRoot";

export const SlideOver = {
	Root: SlideOverRoot,
	Header: ModalHeader,
	Body: PanelBody,
	Footer: PanelFooter,
	CloseButton: ModalCloseButton,
};
