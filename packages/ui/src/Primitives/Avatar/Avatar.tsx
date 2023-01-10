import { UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { classNames, ClassNameType } from "../../Utilities/ClassName";

interface BaseAvatarInterface {
	className?: ClassNameType;
	variant?: "circular" | "rounded";
	children?: React.ReactNode;
}

interface ImageAvatarInterface extends BaseAvatarInterface {
	src: string;
	alt?: string;
}

interface ContentAvatarInterface extends BaseAvatarInterface {
	content: React.ReactNode;
}

type AvatarType = ImageAvatarInterface | ContentAvatarInterface;

export const Avatar: React.FunctionComponent<AvatarType> = (props) => {
	const [error, setError] = useState(false);

	if (error && props.children !== undefined) {
		return <>{props.children}</>;
	}

	const avatarClassNames =
		"flex aspect-[1/1] h-auto w-10 flex-shrink-0 items-center justify-center bg-primary-600 text-white";

	const variantClassName =
		(props.variant ?? "circular") === "circular"
			? "rounded-full"
			: "rounded";

	if (error) {
		return (
			<div
				className={classNames(
					avatarClassNames,
					variantClassName,
					props.className
				)}
			>
				{"alt" in props && props.alt ? (
					<span>{props.alt[0]}</span>
				) : (
					<UserIcon className="h-6 w-6" />
				)}
			</div>
		);
	}

	const avatar =
		"content" in props ? (
			<div
				className={classNames(
					avatarClassNames,
					variantClassName,
					props.className
				)}
			>
				{props.content}
			</div>
		) : (
			<img
				className={classNames(
					avatarClassNames,
					variantClassName,
					props.className
				)}
				src={props.src}
				alt={props.alt}
				onError={() => setError(true)}
			/>
		);

	return avatar;
};
