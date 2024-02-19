import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    content="AI Financial Autopilot"
                    name="Tesseract"
                />
                <meta content="Tesseract AI" property="og:title" />
                <meta
                    content="I Financial Autopilot"
                    property="og:description"
                />
                <meta
                    content="%PUBLIC_URL%/fb-og-image.png"
                    property="og:image"
                />
                <meta
                    property="og:url"
                    content="https://tesseract.garden"
                />
                <meta property="og:site_name" content="Tesseract - Financial AI Autopilot" />
                <meta
                    content="Tesseract - Financial AI Autopilot"
                    property="twitter:title"
                />
                <meta
                    content="Tesseract - Financial AI Autopilo"
                    property="twitter:description"
                />
                <meta
                    content="%PUBLIC_URL%/twitter-card.png"
                    property="twitter:image"
                />
                <meta property="og:type" content="Article" />
                <meta content="summary" name="twitter:card" />
                <meta name="twitter:site" content="@tesseract-ai" />
                <meta name="twitter:creator" content="@tesseract-ai" />
                <meta property="fb:admins" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
