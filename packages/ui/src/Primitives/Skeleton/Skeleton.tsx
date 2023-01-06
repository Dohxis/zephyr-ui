import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface SkeletonInterface {
	width?: number | string;
	height?: number | string;
	variant?: "circular" | "rounded";
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const Skeleton: React.FunctionComponent<SkeletonInterface> = ({
	width,
	height,
	variant = "rounded",
	className,
	children,
}) => {
	const variantClassName = {
		circular: "rounded-full",
		rounded: "rounded",
	}[variant];

	const childProvided = Boolean(children);

	return (
		<div
			className={classNames(
				"animate-pulse bg-gray-200",
				childProvided ? "h-auto max-w-fit [&>*]:invisible" : "w-full",
				variantClassName,
				className
			)}
			style={{ width, height }}
		>
			{childProvided ? children : <>&nbsp;</>}
		</div>
	);
};
