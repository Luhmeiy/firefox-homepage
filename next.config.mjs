/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	basePath: isProd ? "/firefox-homepage" : "",
	output: "export",
	distDir: "dist",
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
};

export default nextConfig;
