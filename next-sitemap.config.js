/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || 'https://www.iyansr.id/',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	sitemapBaseFileName: 'sitemap',
}

module.exports = config
