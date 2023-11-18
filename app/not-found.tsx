import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import TicTacToe from './components/TicTacToe'

export const metadata: Metadata = {
	title: 'Page not found | sparkle.gay',
	description: "This isn't the page you've been looking for"
}

const NotFound: FC = () => {
	return (
		<>
			<main className="flex min-h-screen justify-center md:items-center">
				<div className="flex w-96 flex-col rounded-lg bg-theme-card p-5 shadow-card">
					{/* https://tenor.com/de/view/what-are-you-doing-here-quark-star-trek-deep-space-why-are-you-here-gif-23502371 */}
					<Image
						src={'https://media.tenor.com/rgBjGcEX6NIAAAAC/what-are-you-doing-here-quark.gif'}
						alt="what are you doing here gif"
						width={400}
						height={400}
						className="mb-4 rounded"
					/>
					<h1 className="text-2xl font-bold">404</h1>
					<p>IDK how you got here, but now that you are, we can play come TicTacToe as well, shall we?</p>
					<TicTacToe />
					<Link href={'/'} className="text-indigo-300 transition-colors hover:underline">
						Bring me back to the Homepage
					</Link>
				</div>
			</main>
			{/* <h1>NotFound</h1> */}
		</>
	)
}

export default NotFound
