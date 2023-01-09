import {
	Tooltip as BaseTooltip,
	TooltipAnchor,
	TooltipArrow,
	useTooltipState,
} from "ariakit/tooltip";
import { classNames, ClassNameType } from "../../Utilities/ClassName";
import { PlacementType } from "../Dialogs/Placement";

interface TooltipInterface {
	content: React.ReactNode;
	gutter?: number;
	placement?: PlacementType;
	arrow?: boolean;
	arrowSize?: number;
	arrowClassName?: ClassNameType;
	className?: ClassNameType;
	children?: React.ReactNode | React.ReactNode[];
}

export const Tooltip: React.FunctionComponent<TooltipInterface> = ({
	content,
	arrow = false,
	gutter = arrow ? 0 : 6,
	placement = "top",
	arrowSize = 15,
	arrowClassName,
	className,
	children,
}) => {
	const tooltip = useTooltipState({ placement, gutter });

	return (
		<>
			<TooltipAnchor state={tooltip}>{children}</TooltipAnchor>
			<BaseTooltip
				state={tooltip}
				className={classNames(
					"rounded bg-gray-900 px-3 py-1 text-sm text-white",
					className
				)}
			>
				{arrow && (
					<TooltipArrow
						state={tooltip}
						style={{ fontSize: arrowSize }}
						className={classNames(arrowClassName)}
					/>
				)}

				{content}
			</BaseTooltip>
		</>
	);
};
