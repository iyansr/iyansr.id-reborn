import Image, { type ImageProps } from 'next/image'

export function useMDXComponents(components: any) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
  }
}
