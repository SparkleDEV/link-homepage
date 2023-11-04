import { FC } from 'react'
import Image from 'next/image'

const ProfileHead: FC = () => {
	return (
		<>
			<Image
				src={`https://gravatar.com/avatar/35cf335164df0366467714d593e0e593?s=230`}
				alt="My avatar"
				width={230}
				height={230}
				quality={100}
				className="aspect-square w-56 rounded-2xl border-4 border-theme-imgborder"
			/>
			<h1 className="mt-2 text-2xl font-semibold">Hey, I am Vivian</h1>
			<span>and you can find me on here:</span>
		</>
	)
}

export default ProfileHead
