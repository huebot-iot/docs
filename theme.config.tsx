import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Script from 'next/script'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: 'Huebot Documentation | %s'
    }
  },
  head: (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Huebot Documentation" />
      <meta property="og:description" content="An IoT Framework" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    </>
  ),
  primaryHue: 360,
  logo: <span><img src="/static/logo.png"  width={30} alt="my image" /></span>,
  project: {
    link: 'https://github.com/huebot-iot',
  },
  docsRepositoryBase: 'https://github.com/huebot-iot/docs/blob/main',
  footer: {
    text: 'Huebot Documentation',
  },
}

export default config
