import { DialogDismiss } from "ariakit";
import React, { useContext } from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";
import ModalContext from "../ModalContext";

interface ModalCloseButtonInterface {
	className?: ClassNameType;
	children?: React.ReactElement;
}

export const ModalCloseButton: React.FunctionComponent<
	ModalCloseButtonInterface
> = ({ className, children }) => {
	const modal = useContext(ModalContext);

	if (children === undefined || children === null) {
		return <DialogDismiss className={classNames(className)} />;
	}

	return React.cloneElement(children, { onClick: modal.close });
};
