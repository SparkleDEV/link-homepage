import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LinklistData from '@/types/LinklistData'

type LinklistComponentProps = {
	links: LinklistData[]
}

const Linklist: FC<LinklistComponentProps> = ({ links }) => {
	return (
		<ul className="my-2">
			{links.map((link, index) => (
				<li key={index}>
					<Link
						target="_blank"
						href={link.url}
						className="my-2 flex justify-between rounded-full border-2 border-theme-border bg-theme-bg px-4 py-2 shadow-link transition-all duration-200 hover:scale-105"
					>
						<Image src={link.icon_url} alt={`${link.display} icon`} width={22} height={22} className="w-6" />
						<span className="text-md font-semibold">{link.display}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Linklist
