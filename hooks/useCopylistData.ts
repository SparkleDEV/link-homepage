import CopylistData from '@/types/CopylistData'

const useCopylistData = (url: string): CopylistData[] => {
	// TODO (04 Nov 23): Fetch data from url
	return [
		{
			display: 'Matrix',
			value: 'thesparkle@matrix.org',
			icon_url: '/icons/logos/Matrix.svg'
		}
	]
}

export default useCopylistData
