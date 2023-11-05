import './globals.css'

import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'sparkle.gay',
	description: "A collection of links to Vivian's profiles",
	authors: { name: 'Vivian H', url: 'https://sparkle.gay' },
	openGraph: {
		title: "Vivian's Homepage",
		description: "A collection of links to Vivian's profiles",
		images: 'https://gravatar.com/avatar/35cf335164df0366467714d593e0e593',
		url: 'https://sparkle.gay',
		type: 'profile'
	},
	twitter: {
		card: 'summary'
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link rel="me" href="https://tech.lgbt/@Sparkle" />
			<body className={`${quicksand.className} bg-theme-bg text-center text-gray-300`}>{children}</body>
		</html>
	)
}
