import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
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
	color: ButtonColorType | "none";
	size?: ButtonSizeType;
	disabled?: boolean;
	icon?: React.ReactElement;
	iconPosition?: "left" | "right";
	loading?: boolean;
	children?: React.ReactNode | React.ReactNode[];
}

type PolymorphicButtonInterface<AsType extends React.ElementType> =
	ButtonInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const Button = React.forwardRef(
	<AsType extends React.ElementType = "button">(
		{
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
		}: PolymorphicButtonInterface<AsType>,
		ref: React.ForwardedRef<HTMLButtonElement>
	) => {
		const innerRef = useRef<HTMLButtonElement>(null);

		useImperativeHandle(ref, () => innerRef.current as HTMLButtonElement);

		const [loaderTextColor, setLoaderTextColor] = useState<string>();

		const ButtonComponent = as || "button";

		const styleClassName =
			color === "none"
				? "bg-white hover:bg-gray-100 text-gray-600 border-gray-300"
				: BUTTON_STYLE_CLASS_NAMES[color][variant];

		const sizeClassName = BUTTON_SIZE_CLASS_NAMES[size];

		const disabledClassName = BUTTON_DISABLED_CLASS_NAMES[variant];

		const computedIcon = loading && icon !== undefined ? <Spinner /> : icon;

		// We hide the text when there is no icon and the button is loading,
		// but to prevent the loader to also become transparent we first
		// save the current color and then apply it to the loader
		useEffect(() => {
			if (!loading) {
				setLoaderTextColor(undefined);
			}

			if (loading && innerRef.current) {
				const refStyle = window.getComputedStyle(innerRef.current);

				setLoaderTextColor(refStyle.color);
			}
		}, [loading]);

		const computedChildren =
			loading && icon === undefined ? (
				<>
					<div
						style={{ color: loaderTextColor }}
						className={classNames(
							"absolute inset-0 flex items-center justify-center transition duration-150"
						)}
					>
						<ButtonIcon icon={<Spinner />} size={size} />
					</div>
					{children}
				</>
			) : (
				children
			);

		return (
			<ButtonComponent
				{...props}
				ref={innerRef}
				disabled={disabled || loading}
				className={classNames(
					"flex items-center justify-center rounded border font-medium leading-none no-underline outline-none ring-offset-2 transition duration-150 focus:ring",
					!disabled && styleClassName,
					disabled && "cursor-not-allowed",
					disabled && disabledClassName,
					sizeClassName,
					className,
					loaderTextColor !== undefined &&
						loading &&
						icon === undefined &&
						"relative text-transparent"
				)}
			>
				{iconPosition === "left" && (
					<ButtonIcon
						icon={computedIcon}
						size={size}
						className="mr-1"
					/>
				)}

				{computedChildren}

				{iconPosition === "right" && (
					<ButtonIcon
						icon={computedIcon}
						size={size}
						className="ml-1"
					/>
				)}
			</ButtonComponent>
		);
	}
);
