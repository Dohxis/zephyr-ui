import React from "react";
import { classNames, ClassNameType } from "../../Utilities/ClassName";
import { ButtonInterface } from "./Button";
import { ButtonSizeType } from "./ButtonStyle";

interface ButtonIconInterface {
	size: ButtonSizeType;
	icon?: ButtonInterface<any>["icon"];
	className?: ClassNameType;
}

export const ButtonIcon: React.FunctionComponent<ButtonIconInterface> = ({
	size,
	icon,
	className,
}) => {
	if (icon === undefined) {
		return null;
	}

	const sizeClassNames = {
		xs: "w-4 h-4",
		sm: "w-5 h-5",
		md: "w-6 h-6",
		lg: "w-7 h-7",
		xl: "w-8 h-8",
	}[size];

	return React.cloneElement(icon, {
		className: classNames(
			"fill-current",
			sizeClassNames,
			className,
			icon.props.className
		),
	});
};
