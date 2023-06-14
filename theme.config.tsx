import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: 'Huebot Documentation | %s'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Huebot Documentation" />
      <meta property="og:description" content="A turnkey MQTT-enabled IoT Framework" />
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
