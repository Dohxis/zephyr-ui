export type ButtonVariantType = "solid" | "outline" | "ghost";

export type ButtonColorType = keyof typeof BUTTON_STYLE_CLASS_NAMES;

export const BUTTON_STYLE_CLASS_NAMES = {
	primary: {
		solid: "bg-primary-600 hover:bg-primary-800 text-white border-transparent",
		outline:
			"bg-white hover:bg-primary-50 text-primary-600 border-primary-600",
		ghost: "bg-transparent hover:bg-primary-50 text-primary-600 border-transparent",
	},
	green: {
		solid: "bg-green-600 hover:bg-green-800 text-white border-transparent",
		outline: "bg-white hover:bg-green-50 text-green-600 border-green-600",
		ghost: "bg-transparent hover:bg-green-50 text-green-600 border-transparent",
	},
	yellow: {
		solid: "bg-yellow-600 hover:bg-yellow-800 text-white border-transparent",
		outline:
			"bg-white hover:bg-yellow-50 text-yellow-600 border-yellow-600",
		ghost: "bg-transparent hover:bg-yellow-50 text-yellow-600 border-transparent",
	},
	red: {
		solid: "bg-red-600 hover:bg-red-800 text-white border-transparent",
		outline: "bg-white hover:bg-red-50 text-red-600 border-red-600",
		ghost: "bg-transparent hover:bg-red-50 text-red-600 border-transparent",
	},
	black: {
		solid: "bg-black hover:bg-black/[75%] text-white border-transparent",
		outline: "bg-white hover:bg-black/[10%] text-gray-900 border-gray-900",
		ghost: "bg-transparent hover:bg-black/[10%] text-gray-900 border-transparent",
	},
} satisfies Record<string, Record<ButtonVariantType, string>>;

export const BUTTON_DISABLED_CLASS_NAMES = {
	solid: "bg-gray-200 text-gray-400 border-transparent",
	outline: "bg-gray-100 text-gray-400 border-gray-200",
	ghost: "bg-transparent text-gray-400 border-transparent",
} satisfies Record<ButtonVariantType, string>;

export type ButtonSizeType = keyof typeof BUTTON_SIZE_CLASS_NAMES;

export const BUTTON_SIZE_CLASS_NAMES = {
	xs: "px-[10px] py-[6px] text-xs",
	sm: "px-[12px] py-[8px] text-sm",
	md: "px-[14px] py-[10px] text-base",
	lg: "px-[16px] py-[12px] text-lg",
	xl: "px-[18px] py-[14px] text-xl",
} satisfies Record<string, string>;
