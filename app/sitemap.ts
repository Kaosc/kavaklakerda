import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://kavaklakerda.vercel.app/",
			lastModified: new Date().toISOString(),
			priority: 1,
		},
		{
			url: "https://kavaklakerda.vercel.app/#products",
			lastModified: new Date().toISOString(),
			priority: 0.9,
		},
		{
			url: "https://kavaklakerda.vercel.app/#where",
			lastModified: new Date().toISOString(),
			priority: 0.9,
		},
	]
}
