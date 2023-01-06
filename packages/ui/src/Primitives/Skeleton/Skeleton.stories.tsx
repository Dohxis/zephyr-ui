import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Panel } from "../Panel/Panel";
import { Skeleton as SkeletonComponent } from "./Skeleton";

export default {
	title: "Primitives/Skeleton",
};

export const Skeleton = () => (
	<Example>
		<ExampleItem title="Basic skeleton" className="justify-center">
			<Panel.Root className="w-[250px]">
				<Panel.Body className="space-y-2">
					<SkeletonComponent height={150} />
					<SkeletonComponent />
					<SkeletonComponent width={"60%"} />
				</Panel.Body>
			</Panel.Root>
		</ExampleItem>

		<ExampleItem
			title="Inherit child dimensions"
			className="justify-center"
		>
			<Panel.Root className="w-[250px]">
				<Panel.Body className="flex space-x-2">
					<div>
						<SkeletonComponent variant="circular">
							<div className="h-12 w-12 rounded-full" />
						</SkeletonComponent>
					</div>

					<div className=" flex w-full flex-col justify-center space-y-1">
						<SkeletonComponent />
						<SkeletonComponent height={15} />
					</div>
				</Panel.Body>
			</Panel.Root>
		</ExampleItem>
	</Example>
);
