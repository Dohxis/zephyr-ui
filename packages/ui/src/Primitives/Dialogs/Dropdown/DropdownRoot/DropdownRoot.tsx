import { Menu, MenuArrow, MenuButton, useMenuState } from "ariakit";
import { AnimatePresence, motion, Transition } from "framer-motion";
import React, { useState } from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";
import {
	AnimationInterface,
	computeAnimation,
	computeTransition,
} from "../../Animation";
import { PlacementType } from "../../Placement";

interface DropdownRootInterface {
	target: React.ReactElement;
	className?: ClassNameType;
	arrowClassName?: ClassNameType;
	gutter?: number;
	placement?: PlacementType;
	animation?: AnimationInterface;
	transition?: Transition;
	arrow?: boolean;
	arrowSize?: number;
	children?: React.ReactNode | React.ReactNode[];
}

export const DropdownRoot: React.FunctionComponent<DropdownRootInterface> = ({
	target,
	className,
	arrowClassName,
	arrow = false,
	arrowSize = 30,
	gutter = arrow ? 0 : 6,
	placement = "bottom-start",
	animation,
	transition,
	children,
}) => {
	const [open, setOpen] = useState(false);

	const menu = useMenuState({
		animated: true,
		gutter,
		placement,
		open,
		setOpen,
	});

	const computedAnimation = computeAnimation(animation);

	const computedTransition = computeTransition(transition);

	return (
		<>
			<MenuButton state={menu}>
				{(buttonRef) => React.cloneElement(target, buttonRef)}
			</MenuButton>

			<Menu state={menu} className="outline-none" portal>
				<AnimatePresence>
					{menu.mounted && (
						<motion.div
							key="dropdown"
							className={classNames(
								"min-w-[200px] rounded border border-gray-200 bg-white py-1 shadow-sm",
								className
							)}
							animate={open ? "open" : "closed"}
							initial="closed"
							variants={computedAnimation}
							transition={computedTransition}
							onAnimationComplete={menu.stopAnimation}
						>
							{arrow && (
								<MenuArrow
									style={{ fontSize: arrowSize }}
									className={classNames(
										"-mb-px [&>svg]:fill-white [&>svg]:stroke-gray-200 [&>svg]:stroke-2",
										arrowClassName
									)}
								/>
							)}
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</Menu>
		</>
	);
};
