import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";

interface PanelFooterInterface {
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const PanelFooter: React.FunctionComponent<PanelFooterInterface> = ({
	className,
	children,
}) => {
	return (
		<footer
			className={classNames(
				"flex space-x-2 border-t px-3 pt-2",
				className
			)}
		>
			{children}
		</footer>
	);
};
