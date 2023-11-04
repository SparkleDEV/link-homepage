import { FC } from 'react'
import { ToastHookData } from '@/hooks/useToast'
import clsx from 'clsx'

type ToastProps = {
	hook: ToastHookData
}

const Toast: FC<ToastProps> = ({ hook: { open, message, className } }) => {
	return (
		<div
			className={clsx(
				'fixed bottom-6 right-4 rounded-md px-6 py-4 text-lg text-white shadow-lg transition-all duration-300',
				className,
				open && 'translate-x-0 opacity-100',
				!open && 'translate-x-20 opacity-0'
			)}
		>
			<span>{message}</span>
		</div>
	)
}

export default Toast
