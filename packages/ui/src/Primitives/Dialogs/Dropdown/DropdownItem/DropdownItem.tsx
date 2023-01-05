import { MenuItem } from "ariakit";
import React from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";

interface DropdownItemInterface<AsType extends React.ElementType> {
	as?: AsType;
	className?: ClassNameType;
	icon?: React.ReactElement;
	children: React.ReactNode | React.ReactNode[];
}

type PolymorphicDropdownItemInterface<AsType extends React.ElementType> =
	DropdownItemInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const DropdownItem = <AsType extends React.ElementType = "a">({
	as,
	className,
	icon,
	iconPosition = "left",
	children,
	...props
}: PolymorphicDropdownItemInterface<AsType>) => {
	const LinkComponent = as || "a";

	return (
		<MenuItem {...props}>
			{(itemProps) => (
				<LinkComponent
					className={classNames(
						"flex w-full items-center px-4 py-2 text-sm text-gray-700 no-underline outline-none transition duration-150 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900",
						className
					)}
					{...itemProps}
				>
					{icon !== undefined &&
						React.cloneElement(icon, {
							className: classNames(
								"w-5 h-5 mr-4 fill-current text-gray-400",
								icon.props.className
							),
						})}

					{children}
				</LinkComponent>
			)}
		</MenuItem>
	);
};
