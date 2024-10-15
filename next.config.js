/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.instagram.com",
			},
			{
				protocol: "https",
				hostname: "instagram.com",
			},
		],
	},
}
module.exports = nextConfig
