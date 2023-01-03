import React from "react";
import { classNames, ClassNameType } from "../../Utilities/ClassName";
import { Spinner } from "../Spinner/Spinner";
import { ButtonIcon } from "./ButtonIcon";
import {
	ButtonColorType,
	ButtonSizeType,
	ButtonVariantType,
	BUTTON_DISABLED_CLASS_NAMES,
	BUTTON_SIZE_CLASS_NAMES,
	BUTTON_STYLE_CLASS_NAMES,
} from "./ButtonStyle";

export interface ButtonInterface<AsType extends React.ElementType> {
	as?: AsType;
	className?: ClassNameType;
	variant?: ButtonVariantType;
	color?: ButtonColorType;
	size?: ButtonSizeType;
	disabled?: boolean;
	icon?: React.ReactElement;
	iconPosition?: "left" | "right";
	loading?: boolean;
	children?: React.ReactNode | React.ReactNode[];
}

type PolymorphicButtonInterface<AsType extends React.ElementType> =
	ButtonInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = <AsType extends React.ElementType = "button">({
	as,
	className,
	variant = "solid",
	color = "primary",
	size = "sm",
	disabled = false,
	icon,
	iconPosition = "left",
	loading = false,
	children,
	...props
}: PolymorphicButtonInterface<AsType>) => {
	const ButtonComponent = as || "button";

	const styleClassName = BUTTON_STYLE_CLASS_NAMES[color][variant];

	const sizeClassName = BUTTON_SIZE_CLASS_NAMES[size];

	const disabledClassName = BUTTON_DISABLED_CLASS_NAMES[variant];

	const computedIcon = loading && icon !== undefined ? <Spinner /> : icon;

	const computedChildren =
		loading && icon === undefined ? (
			<>
				<div
					className={classNames(
						"absolute inset-0 flex items-center justify-center transition duration-150"
					)}
				>
					<ButtonIcon icon={<Spinner />} size={size} />
				</div>
				<div className="opacity-0">{children}</div>
			</>
		) : (
			children
		);

	return (
		<ButtonComponent
			{...props}
			disabled={disabled || loading}
			className={classNames(
				"flex items-center justify-center rounded border font-medium leading-none no-underline outline-none ring-offset-2 transition duration-150 focus:ring",
				!disabled && styleClassName,
				disabled && "cursor-not-allowed",
				disabled && disabledClassName,
				loading && icon === undefined && "relative",
				sizeClassName,
				className
			)}
		>
			{iconPosition === "left" && (
				<ButtonIcon icon={computedIcon} size={size} className="mr-1" />
			)}

			{computedChildren}

			{iconPosition === "right" && (
				<ButtonIcon icon={computedIcon} size={size} className="ml-1" />
			)}
		</ButtonComponent>
	);
};
