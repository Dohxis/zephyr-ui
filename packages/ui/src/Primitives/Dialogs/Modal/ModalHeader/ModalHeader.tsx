import { DialogHeading } from "ariakit";
import React from "react";
import { classNames, ClassNameType } from "../../../../Utilities/ClassName";
import { ModalCloseButton } from "../ModalCloseButton/ModalCloseButton";

interface ModalHeaderInterface {
	title: React.ReactNode;
	titleClassName?: ClassNameType;
	description?: React.ReactNode;
	descriptionClassName?: ClassNameType;
	className?: ClassNameType;
	closeButton?: boolean;
	children?: React.ReactNode;
}

export const ModalHeader: React.FunctionComponent<ModalHeaderInterface> = ({
	title,
	titleClassName,
	description,
	descriptionClassName,
	className,
	closeButton = true,
	children,
}) => {
	const shouldMountChildrenContainer = children || closeButton;

	return (
		<div className="flex px-3">
			<div className="flex-grow">
				<DialogHeading
					className={classNames("text-gray-800", titleClassName)}
				>
					{title}
				</DialogHeading>

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

			{shouldMountChildrenContainer && (
				<div className={classNames("flex items-center", className)}>
					{children}
					{closeButton && <ModalCloseButton />}
				</div>
			)}
		</div>
	);
};
