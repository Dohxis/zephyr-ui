import { Transition, Variant, Variants } from "framer-motion";

export interface AnimationInterface extends Variants {
	open: Variant;
	closed: Variant;
}

export const computeAnimation = (animation?: AnimationInterface): Variants => {
	return (
		animation ?? {
			open: {
				scale: 1,
				opacity: 1,
			},
			closed: {
				scale: 0.95,
				opacity: 0,
			},
		}
	);
};

export const computeTransition = (transition?: Transition): Transition => {
	return transition ?? { duration: 0.15 };
};
