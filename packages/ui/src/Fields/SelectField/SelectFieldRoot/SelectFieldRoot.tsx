import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";
import {
	Select,
	SelectLabel,
	SelectPopover,
	useSelectState,
} from "ariakit/select";

export interface SelectFieldRootInterface {
	name: string;
	label?: string;
	defaultValue?: string;
	className?: ClassNameType;
	labelClassName?: ClassNameType;
	inputClassName?: ClassNameType;
	children: React.ReactNode | React.ReactNode[];
}

export const SelectFieldRoot: React.FunctionComponent<
	SelectFieldRootInterface
> = ({
	label,
	name,
	defaultValue,
	className,
	labelClassName,
	inputClassName,
	children,
}) => {
	const select = useSelectState({
		defaultValue,
		gutter: 4,
	});

	return (
		<div className={classNames(className)}>
			{label && (
				<SelectLabel
					state={select}
					className={classNames(
						"block text-gray-800",
						labelClassName
					)}
				>
					{label}
				</SelectLabel>
			)}

			<Select
				state={select}
				className={classNames(
					"flex min-w-[200px] items-center justify-between rounded border border-gray-200 bg-white p-2 text-sm shadow-sm outline-none !ring-blue-200 !ring-offset-2 transition duration-150 focus:border-gray-200 focus:ring",
					inputClassName
				)}
			/>

			<SelectPopover
				portal
				state={select}
				className={classNames(
					"min-w-[200px] rounded border border-gray-200 bg-white p-1 shadow-sm outline-none",
					className
				)}
			>
				{children}
			</SelectPopover>

			<input type="hidden" name={name} value={select.value} />
		</div>
	);
};
