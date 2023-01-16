import { Avatar } from "./Avatar";

describe("Avatar", () => {
	it("should show fallback", () => {
		cy.mount(<Avatar src="./non-existing.png" alt="Full Name" />)
			.get("span")
			.should("contain", "F");
	});
});
