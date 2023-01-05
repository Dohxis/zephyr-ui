import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";

interface PanelRootInterface {
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const PanelRoot: React.FunctionComponent<PanelRootInterface> = ({
	className,
	children,
}) => {
	return (
		<section
			className={classNames(
				"space-y-2 rounded border bg-white py-2",
				className
			)}
		>
			{children}
		</section>
	);
};
