import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button as ButtonComponent } from "./Button";
import { BUTTON_STYLE_CLASS_NAMES } from "./ButtonStyle";
import { StarIcon } from "@heroicons/react/24/solid";

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

		<ExampleItem
			title="Colors"
			className="grid grid-cols-1 gap-4 space-x-0"
		>
			{Object.keys(BUTTON_STYLE_CLASS_NAMES).map((color) => (
				<div className="flex space-x-2" key={color}>
					<ButtonComponent variant="solid" color={color as any}>
						Solid button
					</ButtonComponent>
					<ButtonComponent variant="outline" color={color as any}>
						Outline button
					</ButtonComponent>
					<ButtonComponent variant="ghost" color={color as any}>
						Ghost button
					</ButtonComponent>
				</div>
			))}
		</ExampleItem>

		<ExampleItem title="Sizes">
			<ButtonComponent size="xl">Extra large button</ButtonComponent>
			<ButtonComponent size="lg">Large button</ButtonComponent>
			<ButtonComponent size="md">Medium button</ButtonComponent>
			<ButtonComponent size="sm">Small button</ButtonComponent>
			<ButtonComponent size="xs">Extra small button</ButtonComponent>
		</ExampleItem>

		<ExampleItem title="Disabled">
			<ButtonComponent variant="solid" disabled>
				Solid button
			</ButtonComponent>
			<ButtonComponent variant="outline" disabled>
				Outline button
			</ButtonComponent>
			<ButtonComponent variant="ghost" disabled>
				Ghost button
			</ButtonComponent>
		</ExampleItem>

		<ExampleItem
			title="With optional icons"
			className="grid grid-cols-1 gap-4 space-x-0"
		>
			<div className="flex space-x-2">
				<ButtonComponent variant="solid" icon={<StarIcon />}>
					Solid button
				</ButtonComponent>
				<ButtonComponent variant="outline" icon={<StarIcon />}>
					Outline button
				</ButtonComponent>
				<ButtonComponent variant="ghost" icon={<StarIcon />}>
					Ghost button
				</ButtonComponent>
			</div>

			<div className="flex space-x-2">
				<ButtonComponent variant="solid" icon={<StarIcon />} disabled>
					Solid button
				</ButtonComponent>
				<ButtonComponent variant="outline" icon={<StarIcon />} disabled>
					Outline button
				</ButtonComponent>
				<ButtonComponent variant="ghost" icon={<StarIcon />} disabled>
					Ghost button
				</ButtonComponent>
			</div>

			<div className="flex space-x-2">
				<ButtonComponent
					variant="solid"
					icon={<StarIcon />}
					iconPosition="right"
				>
					Solid button
				</ButtonComponent>
				<ButtonComponent
					variant="outline"
					icon={<StarIcon />}
					iconPosition="right"
				>
					Outline button
				</ButtonComponent>
				<ButtonComponent
					variant="ghost"
					icon={<StarIcon />}
					iconPosition="right"
				>
					Ghost button
				</ButtonComponent>
			</div>

			<div className="flex space-x-2">
				<ButtonComponent
					variant="solid"
					icon={<StarIcon />}
					iconPosition="right"
					disabled
				>
					Solid button
				</ButtonComponent>
				<ButtonComponent
					variant="outline"
					icon={<StarIcon />}
					iconPosition="right"
					disabled
				>
					Outline button
				</ButtonComponent>
				<ButtonComponent
					variant="ghost"
					icon={<StarIcon />}
					iconPosition="right"
					disabled
				>
					Ghost button
				</ButtonComponent>
			</div>
		</ExampleItem>

		<ExampleItem title="Loading state with icon">
			<ButtonComponent variant="solid" icon={<StarIcon />} loading>
				Solid button
			</ButtonComponent>
			<ButtonComponent variant="outline" icon={<StarIcon />} loading>
				Outline button
			</ButtonComponent>
			<ButtonComponent variant="ghost" icon={<StarIcon />} loading>
				Ghost button
			</ButtonComponent>
		</ExampleItem>

		<ExampleItem title="Loading state without icon">
			<ButtonComponent variant="solid" loading>
				Solid button
			</ButtonComponent>
			<ButtonComponent variant="outline" loading>
				Outline button
			</ButtonComponent>
			<ButtonComponent variant="ghost" loading>
				Ghost button
			</ButtonComponent>
		</ExampleItem>
	</Example>
);
