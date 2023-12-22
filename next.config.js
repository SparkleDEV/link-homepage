/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'sparkledev.github.io'
			},
			{
				hostname: 'media.tenor.com'
			}
		],
		minimumCacheTTL: 60 * 10 // Refetch images after 10 Minutes
	}
}

module.exports = nextConfig
