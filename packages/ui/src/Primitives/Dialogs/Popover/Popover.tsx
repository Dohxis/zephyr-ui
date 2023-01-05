import {
	Popover as BasePopover,
	PopoverArrow,
	PopoverDisclosure,
	usePopoverState,
} from "ariakit/popover";
import { AnimatePresence, motion, Transition } from "framer-motion";
import React, { useState } from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";
import {
	AnimationInterface,
	computeAnimation,
	computeTransition,
} from "../Animation";
import { PlacementType } from "../Placement";

interface PopoverInterface {
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

export const Popover: React.FunctionComponent<PopoverInterface> = ({
	target,
	className,
	arrowClassName,
	arrow = false,
	arrowSize = 30,
	gutter = arrow ? 0 : 6,
	placement = "bottom",
	animation,
	transition,
	children,
}) => {
	const [open, setOpen] = useState(false);

	const popover = usePopoverState({
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
			<PopoverDisclosure state={popover}>
				{(buttonRef) => React.cloneElement(target, buttonRef)}
			</PopoverDisclosure>

			<BasePopover state={popover} className="outline-none" portal>
				<AnimatePresence>
					{popover.mounted && (
						<motion.div
							key="popover"
							className={classNames(
								"rounded border border-gray-200 bg-white p-3 shadow-sm",
								className
							)}
							animate={open ? "open" : "closed"}
							initial="closed"
							variants={computedAnimation}
							transition={computedTransition}
							onAnimationComplete={popover.stopAnimation}
						>
							{arrow && (
								<PopoverArrow
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
			</BasePopover>
		</>
	);
};
