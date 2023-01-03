import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button } from "../Button/Button";
import { Popover as PopoverComponent } from "./Popover";

export default {
	title: "Primitives/Popover",
};

export const Popover = () => (
	<Example>
		<ExampleItem>
			<PopoverComponent target={<Button variant="solid">Popover</Button>}>
				<div className="h-[100px] w-[250px] rounded bg-gray-100" />
			</PopoverComponent>
		</ExampleItem>
	</Example>
);
