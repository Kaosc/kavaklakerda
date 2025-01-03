import { SITE_URL } from "@/utils/constants"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: SITE_URL,
			lastModified: new Date().toISOString(),
			priority: 1,
		},
		{
			url: `${SITE_URL}#products`,
			lastModified: new Date().toISOString(),
			priority: 0.9,
		},
		{
			url: `${SITE_URL}#where`,
			lastModified: new Date().toISOString(),
			priority: 0.9,
		},
	]
}
