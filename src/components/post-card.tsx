import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import type { BlogPost } from '@/types/blog'
import Image from 'next/image'

dayjs.extend(relativeTime)

type PostCardProps = BlogPost

export function PostCard({ slug, metadata }: PostCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:backdrop-blur-sm duration-500">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block  lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      {metadata.image && (
        <div className="z-10 sm:col-span-2 items-center hidden sm:flex">
          <div className="w-full max-w-[200px] aspect-video relative rounded-md overflow-hidden ">
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="z-10 sm:col-span-6 flex flex-col justify-center">
        <h3 className="font-medium leading-snug text-neutral-200">
          <Link
            aria-label={metadata.title}
            className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-neutral-300 focus-visible:text-neutral-300 group/link text-base"
            href={`/blog/${slug}`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <div className="flex gap-x-2 items-center">
              <span className="font-semibold text-lg">{metadata.title}</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>
          <p className="text-neutral-500 text-xs mt-2">
            Posted {dayjs(metadata.publishedAt).fromNow()}
          </p>
        </h3>
      </div>

      {metadata.image && (
        <div className="z-10 sm:col-span-2 items-center flex sm:hidden mt-4 ">
          <div className="w-full max-w-[200px] aspect-video relative rounded-md overflow-hidden ">
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
