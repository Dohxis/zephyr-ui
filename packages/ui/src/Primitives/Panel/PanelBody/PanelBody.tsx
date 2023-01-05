import React from "react";
import { classNames, ClassNameType } from "../../../Utilities/ClassName";

interface PanelBodyInterface {
	className?: ClassNameType;
	children?: React.ReactNode;
}

export const PanelBody: React.FunctionComponent<PanelBodyInterface> = ({
	className,
	children,
}) => {
	return <div className={classNames("px-3 pb-1", className)}>{children}</div>;
};