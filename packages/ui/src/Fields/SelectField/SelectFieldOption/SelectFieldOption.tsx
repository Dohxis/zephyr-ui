import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";
import { SelectItem } from "ariakit/select";

export interface SelectFieldOptionInterface {
	value: string;
	className?: ClassNameType;
	children: React.ReactNode | React.ReactNode[];
}

export const SelectFieldOption: React.FunctionComponent<
	SelectFieldOptionInterface
> = ({ value, className, children }) => {
	return (
		<SelectItem
			value={value}
			className={classNames(
				"flex w-full cursor-pointer items-center rounded px-2 py-1 text-sm text-gray-900 no-underline outline-none ring-offset-0 transition duration-150 hover:bg-gray-100 focus:ring",
				className
			)}
		>
			{children}
		</SelectItem>
	);
};
