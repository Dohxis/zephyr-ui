type BasePlacementType = "top" | "bottom" | "left" | "right";

export type PlacementType =
	| BasePlacementType
	| `${BasePlacementType}-start`
	| `${BasePlacementType}-end`;
