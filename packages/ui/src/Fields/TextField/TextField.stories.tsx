import { Example, ExampleItem } from "../../Utilities/Storybook";
import { TextField } from "./TextField";

export default {
	title: "Fields/Text",
};

export const Text = () => (
	<Example>
		<ExampleItem title="Text Field">
			<TextField name="name" placholder="Type..." />
		</ExampleItem>

		<ExampleItem title="Text Field + Title">
			<TextField label="Title" name="title" />
		</ExampleItem>
	</Example>
);
