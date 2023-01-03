import React from "react";
import { Menu, MenuButton, useMenuState } from "ariakit";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";

interface MenuRootInterface {
	target: React.ReactElement;
	className?: ClassNameType;
	children?: React.ReactNode | React.ReactNode[];
}

export const MenuRoot: React.FunctionComponent<MenuRootInterface> = ({
	target,
	className,
	children,
}) => {
	const menu = useMenuState({ gutter: 8 });

	return (
		<>
			<MenuButton state={menu}>
				{(disclosureProps) =>
					React.cloneElement(target, disclosureProps)
				}
			</MenuButton>

			<Menu
				portal
				state={menu}
				className={classNames(
					"min-w-[200px] rounded border border-gray-200 bg-white p-1 shadow-sm outline-none",
					className
				)}
			>
				{children}
			</Menu>
		</>
	);
};
