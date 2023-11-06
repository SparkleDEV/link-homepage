import CopyList from './components/Copylist'
import { FC } from 'react'
import Linklist from './components/Linklist'
import { Metadata } from 'next'
import ProfileHead from './components/ProfileHead'
import useCopylistData from '@/hooks/useCopylistData'
import useLinklistData from '@/hooks/useLinklistData'

export const metadata: Metadata = {
	title: 'My links | sparkle.gay',
	description: "A collection of links to Vivian's profiles"
}

const Home: FC = async () => {
	const linklistData = await useLinklistData()
	const copylistData = await useCopylistData()

	return (
		<main className="flex h-screen justify-center md:items-center">
			<div className="flex flex-col rounded-lg bg-theme-card p-5 shadow-card">
				<ProfileHead />
				{linklistData.data !== undefined ? (
					<Linklist links={linklistData.data} />
				) : (
					<span className="mb-2 text-red-300">{linklistData.error}</span>
				)}
				<div className="w-full border-b-2 border-stone-500" />
				<span className="my-2">You can also reach me here:</span>
				{copylistData.data !== undefined ? (
					<CopyList entries={copylistData.data} />
				) : (
					<span className="mb-2 text-red-300">{copylistData.error}</span>
				)}
			</div>
		</main>
	)
}

export default Home
