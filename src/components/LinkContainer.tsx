import React from "react";

interface LinkProps {
	title: string;
	url: string;
}

export const LinkContainer = ({
	title,
	links,
}: {
	title: string;
	links: LinkProps[];
}) => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl text-rose-500 mb-2">{title}</h1>
			{links &&
				links.map((link) => (
					<a
						href={link.url}
						key={link.title}
						className="hover:text-rose-400"
					>
						{link.title}
					</a>
				))}
		</div>
	);
};
