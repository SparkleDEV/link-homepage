'use client'

import CopylistData from '@/types/CopylistData'
import { FC } from 'react'
import Image from 'next/image'
import Toast from './Toast'
import useToast from '@/hooks/useToast'

type CopyistComponentProps = {
	entries: CopylistData[]
}

const CopyList: FC<CopyistComponentProps> = ({ entries }) => {
	const toastHook = useToast()

	const copyEntry = (content: string) => {
		navigator.clipboard.writeText(content)
		toastHook.trigger('Content copied to clipboard', 'bg-green-500')
	}

	return (
		<>
			<ul>
				{entries.map((entry, index) => (
					<li
						key={index}
						className="mb-2 flex cursor-pointer flex-col items-stretch rounded-md border-2 border-theme-border bg-theme-bg px-2 py-1 shadow-link transition-all duration-200 last:mb-0 hover:scale-105"
						onClick={() => copyEntry(entry.value)}
					>
						<div className="mb-2 mt-1 flex items-center justify-between px-2">
							<Image
								src={entry.icon_url}
								alt={`${entry.display} icon`}
								width={25}
								height={25}
								className="aspect-square w-6"
							/>
							<span className="text-lg font-bold">{entry.display}</span>
						</div>
						<input
							type="text"
							value={entry.value}
							readOnly
							className="cursor-pointer rounded-md border-none bg-theme-input px-2 py-1 font-semibold outline-none"
						/>
					</li>
				))}
			</ul>
			<Toast hook={toastHook} />
		</>
	)
}

export default CopyList
