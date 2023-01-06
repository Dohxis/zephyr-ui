import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Spinner as SpinnerComponent } from "./Spinner";

export default {
	title: "Primitives/Spinner",
};

export const Spinner = () => (
	<Example>
		<ExampleItem title="Basic spinner" className="justify-center">
			<SpinnerComponent className="w-8 text-primary-700" />
		</ExampleItem>

		<ExampleItem title="With colors" className="justify-center">
			<SpinnerComponent className="w-8 text-red-700" />
			<SpinnerComponent className="w-8 text-blue-700" />
			<SpinnerComponent className="w-8 text-green-700" />
		</ExampleItem>

		<ExampleItem title="With sizes" className="items-center justify-center">
			<SpinnerComponent className="w-16 text-primary-700" />
			<SpinnerComponent className="w-12 text-primary-700" />
			<SpinnerComponent className="w-8 text-primary-700" />
			<SpinnerComponent className="w-4 text-primary-700" />
		</ExampleItem>
	</Example>
);
