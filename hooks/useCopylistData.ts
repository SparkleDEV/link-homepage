import CopylistData from '@/types/CopylistData'

type CopylistDataResult = { data?: CopylistData[]; error?: string }

const useCopylistData = async (): Promise<CopylistDataResult> => {
	const result: CopylistDataResult = {}

	const res = await fetch(`${process.env.DATA_HOST}/data/copylist.json`, {
		next: {
			revalidate: 60
		}
	})

	if (!res.ok) {
		result.error = 'There was an error fetching the data :('
		console.error('Could not fetch json data', res)
	} else {
		result.data = (await res.json()) as CopylistData[]
	}

	return result
}

export default useCopylistData
