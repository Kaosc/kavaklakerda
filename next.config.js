/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "instagram.com",
			},
			{
				protocol: "https",
				hostname: "www.instagram.com",
			},
			{
				protocol: "https",
				hostname: "**.fna.fbcdn.net",
			},
			{
				protocol: "http",
				hostname: "**.fna.fbcdn.net",
			},
		],
	},
};

module.exports = nextConfig;
