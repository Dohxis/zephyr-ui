import { Example, ExampleItem } from "../../Utilities/Storybook";
import { SelectField } from "./SelectField";

export default {
	title: "Fields/Select",
};

export const Select = () => (
	<Example>
		<ExampleItem title="Select Field">
			<SelectField.Root name="object">
				<SelectField.Option value="Object #1">
					Object #1
				</SelectField.Option>
				<SelectField.Option value="Object #2">
					Object #2
				</SelectField.Option>
			</SelectField.Root>
		</ExampleItem>

		<ExampleItem title="Select Field + Title">
			<SelectField.Root label="Country" name="country">
				<SelectField.Option value="Belgium">Belgium</SelectField.Option>
				<SelectField.Option value="The Netherlands">
					The Netherlands
				</SelectField.Option>
			</SelectField.Root>
		</ExampleItem>
	</Example>
);
