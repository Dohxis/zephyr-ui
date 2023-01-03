import React from "react";
import { classNames, ClassNameType } from "./ClassName";

interface ExampleInterface {
	children?: React.ReactNode | React.ReactNode[];
}

export const Example: React.FunctionComponent<ExampleInterface> = ({
	children,
}) => <ul className="grid grid-cols-1 gap-4 p-4">{children}</ul>;

interface ExampleItemInterface {
	title?: string;
	className?: ClassNameType;
	children?: React.ReactNode | React.ReactNode[];
}

export const ExampleItem: React.FunctionComponent<ExampleItemInterface> = ({
	title,
	className,
	children,
}) => (
	<li className="rounded border bg-white">
		{title && (
			<div className="rounded-t bg-gray-50 px-3 py-2 text-xs font-medium text-gray-900">
				{title}
			</div>
		)}
		<div
			className={classNames(
				"flex space-x-2 rounded-b p-3",
				title === undefined && "rounded-t",
				className
			)}
			style={{
				background:
					"linear-gradient(90deg, #fff 10px, transparent 1%) 50%, linear-gradient(#fff 10px, transparent 1%) 50%, rgba(0, 0, 0, 0.065)",
				backgroundSize: "12px 12px",
			}}
		>
			{React.Children.map(children, (child) => (
				<div>{child}</div>
			))}
		</div>
	</li>
);
