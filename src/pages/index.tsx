import { useState } from "react";
import config from "../../next.config.mjs";
import Head from "next/head";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

import { MainLinksMenu } from "@/components/MainLinksMenu";
import { SideLinksMenu } from "@/components/SideLinksMenu";
import { AnimatePresence } from "framer-motion";

const pixelifySans = Pixelify_Sans({
	subsets: ["latin"],
});

export default function Home() {
	const [selectedMenu, setSelectedMenu] = useState<"main" | "side">("main");

	return (
		<main
			className={`flex flex-col items-center justify-center h-dvh bg-[url("https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-38.gif")] bg-center bg-cover bg-no-repeat text-white ${pixelifySans.className}`}
		>
			<Head>
				<title>Nova aba</title>
			</Head>

			<Image
				src={`${config.basePath}/firefox.svg`}
				alt="Firefox logo"
				width="125"
				height="125"
			/>

			<div className="flex">
				<AnimatePresence mode="wait" initial={false}>
					{selectedMenu === "main" ? (
						<MainLinksMenu setSelectedMenu={setSelectedMenu} />
					) : (
						<SideLinksMenu setSelectedMenu={setSelectedMenu} />
					)}
				</AnimatePresence>
			</div>
		</main>
	);
}
