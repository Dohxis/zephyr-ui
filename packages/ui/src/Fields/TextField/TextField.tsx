import React, { useId } from "react";
import { classNames, ClassNameType } from "../../Utilities/ClassName";

export interface TextFieldInterface {
	name: string;
	label?: string;
	type?: "text" | "password";
	placholder?: string;
	defaultValue?: string;
	className?: ClassNameType;
	labelClassName?: ClassNameType;
	inputClassName?: ClassNameType;
}

export const TextField: React.FunctionComponent<TextFieldInterface> = ({
	label,
	name,
	type = "text",
	placholder,
	defaultValue,
	className,
	labelClassName,
	inputClassName,
}) => {
	const id = useId();

	return (
		<div className={classNames(className)}>
			{label && (
				<label
					htmlFor={id}
					className={classNames(
						"block text-gray-800",
						labelClassName
					)}
				>
					{label}
				</label>
			)}

			<input
				id={id}
				type={type}
				name={name}
				className={classNames(
					"rounded border border-gray-200 p-2 text-sm shadow-sm outline-none !ring-blue-200 !ring-offset-2 transition duration-150 focus:border-gray-200 focus:ring",
					inputClassName
				)}
				defaultValue={defaultValue}
				placeholder={placholder}
			/>
		</div>
	);
};
