import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface SpinnerInterface
	extends Omit<React.SVGProps<SVGSVGElement>, "className"> {
	className?: ClassNameType;
}

export const Spinner: React.FunctionComponent<SpinnerInterface> = ({
	className,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={classNames("h-auto w-4 animate-spin", className)}
			style={{ animation: "" }}
			{...props}
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				fill="none"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	);
};
