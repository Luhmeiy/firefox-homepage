import config from "../../next.config.mjs";
import Image from "next/image";
import { motion } from "framer-motion";

import { LinkContainer } from "./LinkContainer";
import { LinkMenuProps } from "@/types/LinkMenuProps";

const projectLinks = [
	{
		title: "notion",
		url: "https://www.notion.so/",
	},
	{
		title: "drive",
		url: "https://drive.google.com/",
	},
	{
		title: "figma",
		url: "https://www.figma.com/",
	},
	{
		title: "github",
		url: "https://github.com/",
	},
];

const socialLinks = [
	{
		title: "youtube",
		url: "https://www.youtube.com/",
	},
	{
		title: "whatsapp",
		url: "https://web.whatsapp.com/",
	},
	{
		title: "reddit",
		url: "https://www.reddit.com/",
	},
];

const unisantaLinks = [
	{
		title: "avaead",
		url: "https://avaead.unisanta.br/",
	},
	{
		title: "portal do aluno",
		url: "https://portaleducacional.unisanta.br/FrameHTML/web/app/edu/PortalEducacional/login/",
	},
];

const otherLinks = [
	{
		title: "amazon",
		url: "https://www.amazon.com.br/",
	},
	{
		title: "yahoo",
		url: "https://www.yahoo.com/",
	},
];

export const MainLinksMenu = ({ setSelectedMenu }: LinkMenuProps) => {
	return (
		<motion.div
			className="flex gap-4 mt-10"
			initial={{ x: "-80vw" }}
			animate={{ x: "0" }}
			exit={{ x: "-80vw" }}
		>
			<div className="flex bg-black/75 gap-10 px-5 py-3 rounded-md">
				<LinkContainer title="Projetos" links={projectLinks} />
				<LinkContainer title="Sociais" links={socialLinks} />
				<LinkContainer title="Unisanta" links={unisantaLinks} />
				<LinkContainer title="Outros" links={otherLinks} />
			</div>

			<div
				className="flex h-full absolute -right-14 items-center bg-black/75 px-1 rounded-md hover:cursor-pointer"
				onClick={() => setSelectedMenu("side")}
			>
				<Image
					src={`${config.basePath}/chevron-right.svg`}
					alt="Arrow right"
					width="35"
					height="35"
				/>
			</div>
		</motion.div>
	);
};
