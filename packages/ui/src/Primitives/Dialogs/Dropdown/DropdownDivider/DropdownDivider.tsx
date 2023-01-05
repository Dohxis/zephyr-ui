import React from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";

interface DropdownDividerInterface {
	className?: ClassNameType;
}

export const DropdownDivider: React.FunctionComponent<
	DropdownDividerInterface
> = ({ className }) => {
	return (
		<div
			className={classNames(
				"my-1 h-px w-full border-b border-gray-200",
				className
			)}
		/>
	);
};
