import React from "react";
import { classNames } from "../../../../Utilities/ClassName";
import { Modal } from "../../Modal/Modal";
import { ModalRootInterface } from "../../Modal/ModalRoot/ModalRoot";

export const SlideOverRoot: React.FunctionComponent<ModalRootInterface> = ({
	target,
	className,
	backdropClassName,
	children,
}) => {
	return (
		<Modal.Root
			target={target}
			backdropClassName={classNames("justify-end", backdropClassName)}
			className={classNames(
				"h-full translate-x-full rounded-none data-[enter]:translate-x-0",
				className
			)}
		>
			{children}
		</Modal.Root>
	);
};
