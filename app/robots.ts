import { SITE_URL } from "@/utils/constants"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/private/", "/api/"],
		},
		sitemap: [`${SITE_URL}sitemap.xml`],
	}
}
