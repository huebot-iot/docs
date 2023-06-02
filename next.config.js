const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  target: 'serverless',
})

module.exports = withNextra()
