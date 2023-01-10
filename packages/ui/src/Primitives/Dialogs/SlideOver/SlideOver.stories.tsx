import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Example, ExampleItem } from "../../../Utilities/Storybook";
import { Button } from "../../Button/Button";
import { SlideOver as SlideOverComponent } from "./SlideOver";

export default {
	title: "Primitives/SlideOver",
};

const Placeholder = () => (
	<div className="h-full w-full animate-pulse rounded bg-gray-100" />
);

export const SlideOver = () => (
	<Example>
		<ExampleItem title="Basic slide over" className="justify-center">
			<SlideOverComponent.Root target={<Button>Open slide over</Button>}>
				<SlideOverComponent.Header title="Slide over title" />
				<SlideOverComponent.Body>
					<Placeholder />
				</SlideOverComponent.Body>
			</SlideOverComponent.Root>
		</ExampleItem>

		<ExampleItem title="With footer" className="justify-center">
			<SlideOverComponent.Root target={<Button>Open slide over</Button>}>
				<SlideOverComponent.Header title="Slide over title" />
				<SlideOverComponent.Body>
					<Placeholder />
				</SlideOverComponent.Body>
				<SlideOverComponent.Footer className="justify-end">
					<SlideOverComponent.CloseButton>
						<Button color="none" size="xs">
							Close
						</Button>
					</SlideOverComponent.CloseButton>

					<Button color="primary" size="xs">
						Submit
					</Button>
				</SlideOverComponent.Footer>
			</SlideOverComponent.Root>
		</ExampleItem>
	</Example>
);
