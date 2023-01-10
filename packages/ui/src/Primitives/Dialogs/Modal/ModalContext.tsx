import React from "react";

interface ModalContextInterface {
	close: () => void;
}

const ModalContext = React.createContext<ModalContextInterface>({
	close: () => {},
});

export default ModalContext;
