import { Example, ExampleItem } from "../../../Utilities/Storybook";
import { Button } from "../../Button/Button";
import { Modal as ModalComponent } from "./Modal";

export default {
	title: "Primitives/Modal",
};

const Placeholder = () => (
	<div className="h-[250px] w-full animate-pulse rounded bg-gray-100" />
);

export const Modal = () => (
	<Example>
		<ExampleItem title="Basic modal" className="justify-center">
			<ModalComponent.Root target={<Button>Open modal</Button>}>
				<ModalComponent.Header title="Modal title" />
				<ModalComponent.Body>
					<Placeholder />
				</ModalComponent.Body>
			</ModalComponent.Root>
		</ExampleItem>

		<ExampleItem title="With footer" className="justify-center">
			<ModalComponent.Root target={<Button>Open modal</Button>}>
				<ModalComponent.Header title="Modal title" />
				<ModalComponent.Body>
					<Placeholder />
				</ModalComponent.Body>
				<ModalComponent.Footer className="justify-end">
					<ModalComponent.CloseButton>
						<Button color="none" size="xs">
							Close
						</Button>
					</ModalComponent.CloseButton>

					<Button color="primary" size="xs">
						Submit
					</Button>
				</ModalComponent.Footer>
			</ModalComponent.Root>
		</ExampleItem>
	</Example>
);
