import type { Metadata } from 'next'

import { cn } from '@/utils/cn'
import { Analytics } from '@vercel/analytics/next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const jkt = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
  title: 'Iyan Saputra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(jkt.className, 'bg-neutral-950 text-neutral-50 overflow-x-hidden')}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
