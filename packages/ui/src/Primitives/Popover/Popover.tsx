import React, { useState } from "react";
import {
	Popover as BasePopover,
	PopoverArrow,
	PopoverDisclosure,
	usePopoverState,
} from "ariakit/popover";
import { classNames, ClassNameType } from "../../Utilities/ClassName";
import {
	AnimatePresence,
	motion,
	Transition,
	Variant,
	Variants,
} from "framer-motion";

type BasePlacementType = "top" | "bottom" | "left" | "right";

type PlacementType =
	| BasePlacementType
	| `${BasePlacementType}-start`
	| `${BasePlacementType}-end`;

interface AnimationInterface extends Variants {
	open: Variant;
	closed: Variant;
}

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
	gutter = arrow ? 0 : 8,
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

	const computedAnimation = animation ?? {
		open: {
			height: "auto",
			opacity: 1,
		},
		closed: {
			height: 0,
			opacity: 0,
		},
	};

	const computedTransition = transition ?? { type: "tween", duration: 0.15 };

	return (
		<>
			<PopoverDisclosure state={popover}>
				{(buttonRef) => React.cloneElement(target, buttonRef)}
			</PopoverDisclosure>

			<BasePopover state={popover} portal>
				<AnimatePresence>
					{popover.mounted && (
						<motion.div
							key="popover"
							className={classNames(
								"overflow-y-hidden rounded border border-gray-200 bg-white p-3 shadow-sm outline-none",
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
