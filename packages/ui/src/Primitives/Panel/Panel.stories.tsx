import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button } from "../Button/Button";
import { Panel as PanelComponent } from "./Panel";

export default {
	title: "Primitives/Panel",
};

const Placeholder = () => (
	<div className="h-[250px] w-full animate-pulse rounded bg-gray-100" />
);

export const Panel = () => (
	<Example>
		<ExampleItem title="Basic panel" className="justify-center">
			<PanelComponent.Root className="w-[400px] lg:w-[600px]">
				<PanelComponent.Header title="Header" />
				<PanelComponent.Body>
					<Placeholder />
				</PanelComponent.Body>
			</PanelComponent.Root>
		</ExampleItem>

		<ExampleItem title="With full header" className="justify-center">
			<PanelComponent.Root className="w-[400px] lg:w-[600px]">
				<PanelComponent.Header
					title="Header"
					description="Important header description"
				>
					<Button
						color="none"
						size="xs"
						icon={<ChevronDownIcon />}
						iconPosition="right"
					>
						Options
					</Button>
				</PanelComponent.Header>
				<PanelComponent.Body>
					<Placeholder />
				</PanelComponent.Body>
			</PanelComponent.Root>
		</ExampleItem>

		<ExampleItem title="With footer" className="justify-center">
			<PanelComponent.Root className="w-[400px] lg:w-[600px]">
				<PanelComponent.Header title="Header" />
				<PanelComponent.Body>
					<Placeholder />
				</PanelComponent.Body>
				<PanelComponent.Footer className="justify-end">
					<Button color="none" size="xs" icon={<ChevronLeftIcon />}>
						Previous
					</Button>
					<Button
						color="none"
						size="xs"
						icon={<ChevronRightIcon />}
						iconPosition="right"
					>
						Next
					</Button>
				</PanelComponent.Footer>
			</PanelComponent.Root>
		</ExampleItem>
	</Example>
);
