import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface BadgeInterface {
	value?: React.ReactNode;
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	containerClassName?: ClassNameType;
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const Badge: React.FunctionComponent<BadgeInterface> = ({
	value,
	position = "top-right",
	containerClassName,
	className,
	children,
}) => {
	const positionClassName = {
		"top-left": "top-0 left-0 translate-x-[-50%] translate-y-[-50%]",
		"top-right": "top-0 right-0 translate-x-[50%] translate-y-[-50%]",
		"bottom-left": "bottom-0 left-0 translate-x-[-50%] translate-y-[50%]",
		"bottom-right": "bottom-0 right-0 translate-x-[50%] translate-y-[50%]",
	}[position];

	const standardValueProvived =
		typeof value === "string" ||
		typeof value === "number" ||
		value === undefined;

	return (
		<div className={classNames("relative", containerClassName)}>
			{children}

			<div
				className={classNames(
					"absolute flex items-center justify-center",
					positionClassName,
					standardValueProvived &&
						"h-5 min-w-[1.25rem] rounded-full bg-red-500 text-xs font-medium text-white",
					value === undefined ? "h-2 w-2 min-w-fit" : "px-1.5",
					className
				)}
			>
				{value}
			</div>
		</div>
	);
};
