import { type Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

import { Layout } from '@/components/Layout'
import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Iyan Saputra',
    default: 'Iyan Saputra - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

const inter = Inter({
  subsets: ['latin'],
})

const recursive = IBM_Plex_Mono({
  variable: '--recursive',
  subsets: ['latin'],
  weight: '500',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${recursive.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
