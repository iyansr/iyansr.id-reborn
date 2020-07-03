import { Blogs, BlogType } from '@customType/blogs'
import { Portfolios, Portfolio } from '@customType/portfolios'

async function fetchAPI(query: string, { variables }: any) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}

	return json.data
}

export async function getPostBySlug(slug?: string | string[]): Promise<BlogType> {
	const data = await fetchAPI(
		`query GetPostBySlug($slug: String) {
      blogs(where: { slug: $slug }) {
        id
        title
        slug
        description
        published_at
        published
        content
        thumbnail {
          id
          url
        }
        tags {
          id
          name
          color
          bg_color
        }
      }
    }
    `,
		{
			variables: {
				slug,
			},
		}
	)
	return data?.blogs[0] ?? null
}

export async function getAllPosts(): Promise<Blogs> {
	const data = await fetchAPI(
		`query GetAllBlogs($where: JSON) {
      blogs(sort: "published_at:DESC", limit: 10, start: 0, where: $where) {
        id
        title
        slug
        description
        published_at
        published
        content
        thumbnail {
          id
          url
        }
        tags {
          id
          name
          color
          bg_color
        }
      }
    }
    `,
		{
			variables: {
				where: {
					published: true,
				},
			},
		}
	)
	return data?.blogs
}

export async function getAllPortfolios(): Promise<Portfolios> {
	const data = await fetchAPI(
		`query GetPorfolios {
      portfolios(sort: "createdAt:DESC") {
        id
        title
        slug
        github_readme
        description
        createdAt
        tags {
          id
          name
          color
          bg_color
        }
        image {
          url
          id
        }
        link
      }
    }
    `,
		{
			variables: {
				where: {
					published: true,
				},
			},
		}
	)

	return data?.portfolios
}

export async function getPorfolioBySlug(slug: string): Promise<Portfolio> {
	const data = await fetchAPI(
		`query GetPorfolioBySlug($where: JSON) {
      portfolios(where: $where) {
        id
        title
        slug
        github_readme
        description
        createdAt
        image {
          url
          id
        }
        link
      }
    }
    `,
		{
			variables: {
				where: {
					slug,
				},
			},
		}
	)

	return data?.portfolios[0] ?? null
}
