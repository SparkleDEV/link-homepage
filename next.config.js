/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'gravatar.com'
			},
			{
				hostname: 'sparkledev.github.io'
			}
		]
	}
}

module.exports = nextConfig
