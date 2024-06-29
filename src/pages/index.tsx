import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import { LinkContainer } from "@/components/LinkContainer";

const pixelifySans = Pixelify_Sans({
	subsets: ["latin"],
});

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

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-center h-dvh bg-[url("https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-38.gif")] text-white ${pixelifySans.className}`}
		>
			<Image
				src="/firefox.svg"
				alt="Firefox logo"
				width="125"
				height="125"
			/>

			<div className="flex bg-black/75 gap-10 mt-10 px-5 py-3 rounded-md">
				<LinkContainer title="Projetos" links={projectLinks} />
				<LinkContainer title="Sociais" links={socialLinks} />
				<LinkContainer title="Unisanta" links={unisantaLinks} />
				<LinkContainer title="Outros" links={otherLinks} />
			</div>
		</main>
	);
}
