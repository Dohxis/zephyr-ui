import { Example, ExampleItem } from "../../Utilities/Storybook";
import { Button } from "../Button/Button";
import { Menu as MenuComponent } from "./Menu";

export default {
	title: "Primitives/Menu",
};

export const Menu = () => (
	<Example>
		<ExampleItem>
			<MenuComponent.Root target={<Button variant="solid">Menu</Button>}>
				<MenuComponent.Item href="#">Cut</MenuComponent.Item>
				<MenuComponent.Item href="#">Copy</MenuComponent.Item>
				<MenuComponent.Item href="#">Paste</MenuComponent.Item>
			</MenuComponent.Root>
		</ExampleItem>
	</Example>
);
