import { useState } from 'react'

export type ToastHookData = {
	trigger: (message: string, className: string, duration?: number) => void
	open: boolean
	message: string
	className: string
}

const useToast = (): ToastHookData => {
	const [open, setOpen] = useState(false)
	const [toastMessage, setToastMessage] = useState('')
	const [toastClasses, setToastClasses] = useState('')
	const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout>()

	return {
		trigger: (message: string, className: string, duration: number = 3000) => {
			setOpen(true)
			setToastClasses(className)
			setToastMessage(message)

			clearTimeout(timeoutRef)

			const tref = setTimeout(() => {
				setOpen(false)
			}, duration)
			setTimeoutRef(tref)
		},
		open,
		message: toastMessage,
		className: toastClasses
	}
}

export default useToast
