import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Badge as BadgeComponet } from "./Badge";

export default {
	title: "Primitives/Badge",
};

const Button: React.FunctionComponent<{ children: React.ReactNode }> = ({
	children,
}) => (
	<button className="hover: flex h-10 w-10 items-center justify-center rounded-full transition duration-150 hover:bg-black/10">
		{children}
	</button>
);

const Content = () => <EnvelopeIcon className="h-6 w-6 text-gray-900" />;

export const Badge = () => (
	<Example>
		<ExampleItem
			title="Basic badge"
			className="items-center justify-center"
		>
			<Button>
				<BadgeComponet value={"99+"}>
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet>
					<Content />
				</BadgeComponet>
			</Button>
		</ExampleItem>

		<ExampleItem
			title="With different positions"
			className="items-center justify-center"
		>
			<Button>
				<BadgeComponet value={"9"}>
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet value={"9"} position="top-left">
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet value={"9"} position="bottom-right">
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet value={"9"} position="bottom-left">
					<Content />
				</BadgeComponet>
			</Button>
		</ExampleItem>

		<ExampleItem
			title="With different colors"
			className="items-center justify-center"
		>
			<Button>
				<BadgeComponet value={"99+"} className="bg-blue-500">
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet value={"99+"} className="bg-pink-500">
					<Content />
				</BadgeComponet>
			</Button>

			<Button>
				<BadgeComponet value={"99+"} className="bg-emerald-500">
					<Content />
				</BadgeComponet>
			</Button>
		</ExampleItem>
	</Example>
);
