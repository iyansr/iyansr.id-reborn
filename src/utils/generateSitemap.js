const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
	const pages = await globby(['src/pages/**/*.tsx', '!src/pages/_*.tsx', '!src/pages/**/[slug].tsx', 'src/content/posts/*.md'])

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
					.map((page) => {
						const path = page
							.replace('src/pages', '')
							.replace('/blog/index', 'blog')
							.replace('/404', '')
							.replace('/work/index', 'work')
							.replace('/now/index', 'now')
							.replace('src/content/posts/', 'blog/')
							.replace('.tsx', '')
							.replace('.md', '')
						const route = path === '/index' ? '' : path
						console.log(route)

						return `
                      <url>
                          <loc>${`https://iyansr.id/${route}`}</loc>
                      </url>
                  `
					})
					.join('')}
      </urlset>
  `

	fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()
