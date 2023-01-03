import { Example, ExampleItem } from "../../Utilities/Storybook";
import { TextField } from "./TextField";

export default {
	title: "Fields/Text",
};

export const Text = () => (
	<Example>
		<ExampleItem title="Text Field">
			<TextField name="object" placholder="Type..." />
		</ExampleItem>

		<ExampleItem title="Text Field + Title">
			<TextField label="First name" name="firstName" />

			<TextField label="Last name" name="lastName" />
		</ExampleItem>
	</Example>
);
