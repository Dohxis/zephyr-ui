import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button } from "../Button/Button";
import { Tooltip as TooltipComponent } from "./Tooltip";

export default {
	title: "Primitives/Tooltip",
};

const Target: React.FunctionComponent<{ text: string }> = ({ text }) => (
	<Button color="primary" className="w-full">
		{text}
	</Button>
);

export const Tooltip = () => (
	<Example>
		<ExampleItem title="Basic tooltip" className="justify-center">
			<TooltipComponent content="Basic tooltip">
				<Target text="Hover" />
			</TooltipComponent>
		</ExampleItem>

		<ExampleItem
			title="With different positions"
			className="justify-center"
		>
			<div className="grid w-[100px] gap-2">
				<TooltipComponent content="Basic tooltip" placement="left">
					<Target text="Left" />
				</TooltipComponent>

				<TooltipComponent content="Basic tooltip" placement="bottom">
					<Target text="Bottom" />
				</TooltipComponent>
			</div>

			<div className="grid w-[100px] gap-2">
				<TooltipComponent content="Basic tooltip" placement="top">
					<Target text="Top" />
				</TooltipComponent>

				<TooltipComponent content="Basic tooltip" placement="right">
					<Target text="Right" />
				</TooltipComponent>
			</div>
		</ExampleItem>

		<ExampleItem title="With arrow" className="justify-center">
			<TooltipComponent content="Basic tooltip" arrow>
				<Target text="Hover" />
			</TooltipComponent>
		</ExampleItem>
	</Example>
);
