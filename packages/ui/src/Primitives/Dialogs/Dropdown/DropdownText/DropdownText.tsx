import React from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";

interface DropdownTextInterface {
	className?: ClassNameType;
	children: React.ReactNode | React.ReactNode[];
}

export const DropdownText: React.FunctionComponent<DropdownTextInterface> = ({
	className,
	children,
}) => {
	return (
		<div
			className={classNames(
				"flex w-full flex-col justify-center px-4 py-2 text-sm text-gray-800",
				className
			)}
		>
			{children}
		</div>
	);
};
