import { UserCircleIcon, UserIcon } from "@heroicons/react/24/solid";
import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Avatar as AvatarComponent } from "./Avatar";

export default {
	title: "Primitives/Avatar",
};

export const Avatar = () => (
	<Example>
		<ExampleItem title="Image avatars" className="justify-center">
			<AvatarComponent
				src="https://i.pravatar.cc/300?img=60"
				alt="John Fargo"
			/>

			<AvatarComponent
				src="https://i.pravatar.cc/300?img=5"
				alt="Margaret Caudle"
			/>

			<AvatarComponent
				src="https://i.pravatar.cc/300?img=31"
				alt="Elizabeth Goodwin"
			/>
		</ExampleItem>

		<ExampleItem title="Letter avatars" className="justify-center">
			<AvatarComponent content="J" className="bg-primary-600" />

			<AvatarComponent content="M" className="bg-emerald-600" />

			<AvatarComponent content="E" className="bg-pink-600" />
		</ExampleItem>

		<ExampleItem title="Icon avatars" className="justify-center">
			<AvatarComponent
				content={<UserIcon className="h-6 w-6" />}
				className="bg-red-600"
			/>

			<AvatarComponent
				content={<UserCircleIcon className="h-10 w-10" />}
				className="bg-transparent text-gray-800"
			/>
		</ExampleItem>

		<ExampleItem title="With sizes" className="items-center justify-center">
			<AvatarComponent
				src="https://i.pravatar.cc/300?img=60"
				alt="John Fargo"
				className="w-10"
			/>

			<AvatarComponent
				src="https://i.pravatar.cc/300?img=5"
				alt="Margaret Caudle"
				className="w-12"
			/>

			<AvatarComponent
				src="https://i.pravatar.cc/300?img=31"
				alt="Elizabeth Goodwin"
				className="w-16"
			/>
		</ExampleItem>

		<ExampleItem title="With variants" className="justify-center">
			<AvatarComponent
				src="https://i.pravatar.cc/300?img=60"
				alt="John Fargo"
				variant="circular"
			/>

			<AvatarComponent
				src="https://i.pravatar.cc/300?img=31"
				alt="Elizabeth Goodwin"
				variant="rounded"
			/>
		</ExampleItem>

		<ExampleItem title="With fallbacks" className="justify-center">
			<AvatarComponent src="/broken-image.jpg" alt="Elizabeth Goodwin" />

			<AvatarComponent src="/broken-image.jpg" />

			<AvatarComponent src="/broken-image.jpg" alt="Elizabeth Goodwin">
				<UserCircleIcon className="h-10 w-10" />
			</AvatarComponent>
		</ExampleItem>
	</Example>
);
