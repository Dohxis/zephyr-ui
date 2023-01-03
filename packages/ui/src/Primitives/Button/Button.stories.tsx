import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button as ButtonComponent } from "./Button";

export default {
	title: "Primitives/Button",
};

export const Button = () => (
	<Example>
		<ExampleItem title="Variants">
			<ButtonComponent variant="solid">Solid button</ButtonComponent>
			<ButtonComponent variant="outline">Outline button</ButtonComponent>
			<ButtonComponent variant="ghost">Ghost button</ButtonComponent>
		</ExampleItem>

		<ExampleItem title="Sizes">
			<ButtonComponent size="lg">Large button</ButtonComponent>
			<ButtonComponent size="md">Medium button</ButtonComponent>
			<ButtonComponent size="sm">Small button</ButtonComponent>
			<ButtonComponent size="xs">Extra small button</ButtonComponent>
		</ExampleItem>
	</Example>
);
