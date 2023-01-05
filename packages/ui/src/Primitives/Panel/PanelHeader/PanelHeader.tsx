import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";

interface PanelHeaderInterface {
	title: React.ReactNode;
	titleClassName?: ClassNameType;
	description?: React.ReactNode;
	descriptionClassName?: ClassNameType;
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderInterface> = ({
	title,
	titleClassName,
	description,
	descriptionClassName,
	className,
	children,
}) => {
	return (
		<header className="flex px-4">
			<div className="flex-grow">
				<h1 className={classNames("text-gray-800", titleClassName)}>
					{title}
				</h1>

				{description && (
					<p
						className={classNames(
							"text-sm text-gray-600",
							descriptionClassName
						)}
					>
						{description}
					</p>
				)}
			</div>

			{children && (
				<div className={classNames("flex items-center", className)}>
					{children}
				</div>
			)}
		</header>
	);
};
