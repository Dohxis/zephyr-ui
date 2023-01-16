/// <reference types="cypress" />

import { mount } from "cypress/react18";
import "../../.storybook/index.generated.css";

declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}

Cypress.Commands.add("mount", mount);
