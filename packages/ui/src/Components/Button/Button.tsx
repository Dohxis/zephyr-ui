import React from "react";
import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface ButtonInterface<AsType extends React.ElementType> {
	as?: AsType;
	className?: ClassNameType;
	variant?: "solid" | "outline" | "ghost";
	size?: "xs" | "sm" | "md" | "lg";
	children?: React.ReactNode | React.ReactNode[];
}

type PolymorphicButtonInterface<AsType extends React.ElementType> =
	ButtonInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = <AsType extends React.ElementType = "button">({
	as,
	className,
	variant = "solid",
	size = "sm",
	children,
	...props
}: PolymorphicButtonInterface<AsType>) => {
	const ButtonComponent = as || "button";

	const variantClassName = {
		solid: "bg-indigo-600 hover:bg-indigo-800 text-white border-transparent",
		outline:
			"bg-white hover:bg-indigo-50 text-indigo-600 border-indigo-600",
		ghost: "bg-transparent hover:bg-indigo-50 text-indigo-600 border-transparent",
	}[variant];

	const sizeClassName = {
		xs: "px-[10px] py-[6px] text-xs leading-none",
		sm: "px-[12px] py-[8px] text-sm leading-none",
		md: "px-[14px] py-[10px] text-base leading-none",
		lg: "px-[16px] py-[12px] text-lg leading-none",
	}[size];

	return (
		<ButtonComponent
			{...props}
			className={classNames(
				"flex items-center justify-center rounded border font-medium no-underline outline-none ring-offset-2 transition duration-150 focus:ring",
				variantClassName,
				sizeClassName,
				className
			)}
		>
			{children}
		</ButtonComponent>
	);
};
