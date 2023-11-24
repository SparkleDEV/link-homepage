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
		]
	}
}

module.exports = nextConfig
