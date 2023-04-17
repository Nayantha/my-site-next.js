/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    assetPrefix: isProd ? 'https://github.com/Nayantha/my-site-next.js' : '',
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
