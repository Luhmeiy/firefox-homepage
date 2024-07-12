import { Dispatch, SetStateAction } from "react";

export type LinkMenuProps = {
	setSelectedMenu: Dispatch<SetStateAction<"main" | "side">>;
};
