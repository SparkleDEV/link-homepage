import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fetchAvatarMetadata from '@/requests/avatarMetadata'

const ProfileHead: FC = async () => {
	const avatarMetadata = await fetchAvatarMetadata()

	return (
		<>
			{avatarMetadata.data !== undefined ? (
				<Link
					href={avatarMetadata.data.link}
					target="_blank"
					className="cursor-default"
					title={avatarMetadata.data.tooltip}
				>
					<Image
						src={`${process.env.DATA_HOST}/img/avatar.png`}
						alt="My avatar"
						width={230}
						height={230}
						quality={100}
						className="mx-auto aspect-square w-56 rounded-2xl border-4 border-theme-imgborder"
					/>
				</Link>
			) : (
				<span className="mb-2 text-red-300">{avatarMetadata.error}</span>
			)}
			<h1 className="mt-2 text-2xl font-semibold">Hey, I am Vivian</h1>
			<span>and you can find me on here:</span>
		</>
	)
}

export default ProfileHead
