import Document, { Head, Main, NextScript } from "next/document";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "https://tinymystery.club";

export default class MyDocument extends Document {
  /* I'm suspicious that this is doing nothing. */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // This is the reason this file was added - to set the `lang` attribute.
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            sizes="192x192"
            href="/assets/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            href="/assets/apple-touch-icon-152x152.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${BASE_URL}/og-image.jpg`} />
          <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#349E76"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
