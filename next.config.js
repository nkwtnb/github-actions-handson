/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/github-actions-handson',
  basePath: '/github-actions-handson',
}

const runtimeConfig = {
  serverRuntimeConfig: {
    basePath: nextConfig.basePath
  },
}

module.exports = {
  ...nextConfig,
  ...runtimeConfig
}
