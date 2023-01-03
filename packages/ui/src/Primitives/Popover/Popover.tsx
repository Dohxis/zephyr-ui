import React from "react";
import {
	Popover as AriakitPopover,
	PopoverDisclosure,
	usePopoverState,
} from "ariakit/popover";
import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface PopoverInterface {
	target: React.ReactElement;
	className?: ClassNameType;
	children?: React.ReactNode | React.ReactNode[];
}

export const Popover: React.FunctionComponent<PopoverInterface> = ({
	target,
	className,
	children,
}) => {
	const popover = usePopoverState({ gutter: 8 });

	return (
		<>
			<PopoverDisclosure state={popover}>
				{(disclosureProps) =>
					React.cloneElement(target, disclosureProps)
				}
			</PopoverDisclosure>

			<AriakitPopover
				portal
				state={popover}
				className={classNames(
					"rounded border border-gray-200 bg-white p-3 shadow-sm outline-none",
					className
				)}
			>
				{children}
			</AriakitPopover>
		</>
	);
};
