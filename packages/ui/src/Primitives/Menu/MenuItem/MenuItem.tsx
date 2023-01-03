import React from "react";
import { MenuItem as AriakitMenuItem } from "ariakit";
import { ClassNameType } from "../../../Utilities/ClassName";

interface MenuItemInterface<AsType extends React.ElementType> {
	as?: AsType;
	className?: ClassNameType;
	children: React.ReactNode | React.ReactNode[];
}

type PolymorphicMenuItemInterface<AsType extends React.ElementType> =
	MenuItemInterface<AsType> & React.ComponentPropsWithoutRef<AsType>;

export const MenuItem = <AsType extends React.ElementType = "a">({
	as,
	className,
	children,
	...props
}: PolymorphicMenuItemInterface<AsType>) => {
	const LinkComponent = as || "a";

	return (
		<AriakitMenuItem {...props}>
			{(itemProps) => (
				<LinkComponent
					className="flex w-full items-center rounded px-2 py-1 text-sm text-gray-900 no-underline outline-none ring-offset-0 transition duration-150 hover:bg-gray-100 focus:ring"
					{...itemProps}
				>
					{children}
				</LinkComponent>
			)}
		</AriakitMenuItem>
	);
};
