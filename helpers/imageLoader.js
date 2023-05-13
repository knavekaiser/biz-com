export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("/assets")) {
    return `${process.env.NEXT_PUBLIC_BIZ_APP_BASE_URL}${src}?w=${width}&q=${
      quality || 75
    }`;
  }
  return `${src}?w=${width}&q=${quality || 75}`;
}
