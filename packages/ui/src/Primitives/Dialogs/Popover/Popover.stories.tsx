import { Example, ExampleItem } from "../../../Utilities/Storybook";
import { Button } from "../../Button/Button";
import { Popover as PopoverComponent } from "./Popover";

export default {
	title: "Primitives/Popover",
};

const Placeholder = () => (
	<div className="h-[100px] w-[250px] animate-pulse rounded bg-gray-100" />
);

export const Popover = () => (
	<Example>
		<ExampleItem title="Basic popover" className="justify-center">
			<PopoverComponent
				target={<Button variant="solid">Show popover</Button>}
			>
				<Placeholder />
			</PopoverComponent>
		</ExampleItem>

		<ExampleItem
			title="With different positions"
			className="flex-col items-center space-x-0 space-y-2"
		>
			<PopoverComponent
				target={<Button variant="solid">Show top popover</Button>}
				placement="top"
			>
				<Placeholder />
			</PopoverComponent>

			<PopoverComponent
				target={<Button variant="solid">Show bottom popover</Button>}
				placement="bottom"
			>
				<Placeholder />
			</PopoverComponent>
		</ExampleItem>

		<ExampleItem title="With arrow" className="justify-center">
			<PopoverComponent
				target={<Button variant="solid">Show popover</Button>}
				arrow
			>
				<Placeholder />
			</PopoverComponent>
		</ExampleItem>

		<ExampleItem title="With custom animation" className="justify-center">
			<PopoverComponent
				target={<Button variant="solid">Show popover</Button>}
				animation={{ open: { scale: 1 }, closed: { scale: 0 } }}
				transition={{ type: "linear", duration: 0.5 }}
			>
				<Placeholder />
			</PopoverComponent>
		</ExampleItem>
	</Example>
);
