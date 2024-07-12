import config from "../../next.config.mjs";
import Image from "next/image";
import { motion } from "framer-motion";

import { LinkContainer } from "./LinkContainer";
import { LinkMenuProps } from "@/types/LinkMenuProps";

const streamingLinks = [
	{
		title: "netflix",
		url: "https://www.netflix.com/",
	},
	{
		title: "prime video",
		url: "https://www.primevideo.com/",
	},
	{
		title: "max",
		url: "https://play.max.com/",
	},
];

const gameLinks = [
	{
		title: "epic games",
		url: "https://www.epicgames.com/",
	},
	{
		title: "prime gaming",
		url: "https://gaming.amazon.com/",
	},
	{
		title: "how long to beat",
		url: "https://howlongtobeat.com/",
	},
	{
		title: "gg.deals",
		url: "https://gg.deals/",
	},
];

export const SideLinksMenu = ({ setSelectedMenu }: LinkMenuProps) => {
	return (
		<motion.div
			className="flex gap-4 mt-10"
			initial={{ x: "80vw" }}
			animate={{ x: "0" }}
			exit={{ x: "80vw" }}
		>
			<div
				className="flex h-full absolute -left-14 items-center bg-black/75 px-1 rounded-md hover:cursor-pointer"
				onClick={() => setSelectedMenu("main")}
			>
				<Image
					src={`${config.basePath}/chevron-left.svg`}
					alt="Arrow left"
					width="35"
					height="35"
				/>
			</div>

			<div className="flex bg-black/75 gap-10 px-5 py-3 rounded-md">
				<LinkContainer title="Streamings" links={streamingLinks} />
				<LinkContainer title="Jogos" links={gameLinks} />
			</div>
		</motion.div>
	);
};
