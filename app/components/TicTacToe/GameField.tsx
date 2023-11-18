import { FC, MouseEvent } from 'react'
import { RxCircle, RxCross2 } from 'react-icons/rx'

import clsx from 'clsx'

export type FieldValue = 'player' | 'com' | 'empty'

type GameFieldProps = {
	value: FieldValue
	extraClasses: string
	onClick: (e: MouseEvent) => void
}

const GameField: FC<GameFieldProps> = ({ value, extraClasses, onClick }) => {
	return (
		<div
			className={clsx('aspect-square', extraClasses, value === 'empty' ? 'cursor-pointer' : 'cursor-not-allowed')}
			onClick={onClick}
		>
			{value === 'player' && <RxCross2 className="h-full w-full p-2 text-blue-500" />}
			{value === 'com' && <RxCircle className="h-full w-full p-2 text-red-500" />}
		</div>
	)
}

export default GameField
