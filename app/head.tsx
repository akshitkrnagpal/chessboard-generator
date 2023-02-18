const title = "Chessboard Generator";
const description = "";
const url = "https://chessboard-generator.vercel.app";

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" href="/icon-192x192.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/icon-192x192.png" />
      <meta name="twitter:creator" content="@akshitkrnagpal" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/icon-192x192.png" />
    </>
  );
}
