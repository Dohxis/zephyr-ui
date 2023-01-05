import {
	ArchiveBoxIcon,
	ArrowRightCircleIcon,
	ChevronDownIcon,
	DocumentDuplicateIcon,
	HeartIcon,
	PencilSquareIcon,
	TrashIcon,
	UserPlusIcon,
} from "@heroicons/react/20/solid";
import { Example, ExampleItem } from "../../../Utilities/Storybook";
import { Button } from "../../Button/Button";
import { Dropdown as DropdownComponent } from "./Dropdown";

export default {
	title: "Primitives/Dropdown",
};

export const Dropdown = () => (
	<Example>
		<ExampleItem title="Basic dropdown" className="justify-center">
			<DropdownComponent.Root
				target={
					<Button
						variant="solid"
						color="none"
						icon={<ChevronDownIcon />}
						iconPosition="right"
					>
						Options
					</Button>
				}
			>
				<DropdownComponent.Item as="button">
					Account settings
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Support
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					License
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Sign out
				</DropdownComponent.Item>
			</DropdownComponent.Root>
		</ExampleItem>

		<ExampleItem title="With dividers" className="justify-center">
			<DropdownComponent.Root
				target={
					<Button
						variant="solid"
						color="none"
						icon={<ChevronDownIcon />}
						iconPosition="right"
					>
						Options
					</Button>
				}
			>
				<DropdownComponent.Item as="button">
					Edit
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Duplicate
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button">
					Archive
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Move
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button">
					Share
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Add to favorites
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button">
					Delete
				</DropdownComponent.Item>
			</DropdownComponent.Root>
		</ExampleItem>

		<ExampleItem title="With icons" className="justify-center">
			<DropdownComponent.Root
				target={
					<Button
						color="none"
						icon={<ChevronDownIcon />}
						iconPosition="right"
					>
						Options
					</Button>
				}
			>
				<DropdownComponent.Item as="button" icon={<PencilSquareIcon />}>
					Edit
				</DropdownComponent.Item>
				<DropdownComponent.Item
					as="button"
					icon={<DocumentDuplicateIcon />}
				>
					Duplicate
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button" icon={<ArchiveBoxIcon />}>
					Archive
				</DropdownComponent.Item>
				<DropdownComponent.Item
					as="button"
					icon={<ArrowRightCircleIcon />}
				>
					Move
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button" icon={<UserPlusIcon />}>
					Share
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button" icon={<HeartIcon />}>
					Add to favorites
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button" icon={<TrashIcon />}>
					Delete
				</DropdownComponent.Item>
			</DropdownComponent.Root>
		</ExampleItem>

		<ExampleItem title="With header" className="justify-center">
			<DropdownComponent.Root
				target={
					<Button
						variant="solid"
						color="none"
						icon={<ChevronDownIcon />}
						iconPosition="right"
					>
						Options
					</Button>
				}
			>
				<DropdownComponent.Text>
					<span>Signed in as</span>
					<span className="font-medium">user@example.com</span>
				</DropdownComponent.Text>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button">
					Account settings
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					Support
				</DropdownComponent.Item>
				<DropdownComponent.Item as="button">
					License
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item as="button">
					Sign out
				</DropdownComponent.Item>
			</DropdownComponent.Root>
		</ExampleItem>

		<ExampleItem
			title="With custom dropdown items"
			className="justify-center"
		>
			<DropdownComponent.Root target={<Button color="none">Edit</Button>}>
				<DropdownComponent.Item
					as="button"
					className="flex justify-between"
				>
					<span>Cut</span>
					<span>⌘X</span>
				</DropdownComponent.Item>
				<DropdownComponent.Item
					as="button"
					className="flex justify-between"
				>
					<span>Copy</span>
					<span>⌘C</span>
				</DropdownComponent.Item>
				<DropdownComponent.Item
					as="button"
					className="flex justify-between"
				>
					<span>Paste</span>
					<span>⌘V</span>
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item
					as="button"
					className="flex justify-between"
				>
					<span>Undo</span>
					<span>⌘Z</span>
				</DropdownComponent.Item>
				<DropdownComponent.Divider />
				<DropdownComponent.Item
					as="button"
					className="flex justify-between"
				>
					<span>Redo</span>
					<span>⌘Y</span>
				</DropdownComponent.Item>
			</DropdownComponent.Root>
		</ExampleItem>
	</Example>
);
