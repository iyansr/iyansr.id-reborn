const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

;(async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
	const pages = await globby(['src/pages/**/*{.tsx,.mdx}', '!src/pages/_*.tsx'])
	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
					.map((page) => {
						const path = page
							.replace('src/pages', '')
							.replace('/blog/index', 'blog')
							.replace('/404', '/error')
							.replace('/work/index', '/work')
							.replace('/now/index', '/now')
							.replace('.tsx', '')
							.replace('.mdx', '')
						const route = path === '/index' ? '' : path
						return `
                        <url>
                            <loc>${`https://iyansr.id${route}`}</loc>
                        </url>
                    `
					})
					.join('')}
        </urlset>
	 `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	})

	// eslint-disable-next-line no-sync
	fs.writeFileSync('public/sitemap.xml', formatted)
})()
