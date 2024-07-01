const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src
}

export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `https://iyansr.id/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}
