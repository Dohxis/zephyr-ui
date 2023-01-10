import { Dialog, useDialogState } from "ariakit";
import React from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";
import ModalContext from "../ModalContext";

export interface ModalRootInterface {
	target: React.ReactElement;
	className?: ClassNameType;
	backdropClassName?: ClassNameType;
	children?: React.ReactNode | React.ReactNode[];
}

export const ModalRoot: React.FunctionComponent<ModalRootInterface> = ({
	target,
	className,
	backdropClassName,
	children,
}) => {
	const dialog = useDialogState({ animated: true });

	return (
		<ModalContext.Provider value={{ close: dialog.hide }}>
			{React.cloneElement(target, { onClick: dialog.toggle })}

			<Dialog
				state={dialog}
				backdropProps={{
					className: classNames(
						"flex items-center justify-center bg-black/[65%] opacity-0 duration-150 data-[enter]:opacity-100",
						backdropClassName
					),
				}}
				className={classNames(
					"z-50 flex w-full max-w-2xl flex-col space-y-2 rounded border bg-white py-2 opacity-0 duration-150 data-[enter]:opacity-100",
					className
				)}
			>
				{children}
			</Dialog>
		</ModalContext.Provider>
	);
};
