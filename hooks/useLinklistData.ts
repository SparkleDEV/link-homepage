import LinklistData from '@/types/LinklistData'

type LinklistDataResult = { data?: LinklistData[]; error?: string }

const useLinklistData = async (): Promise<LinklistDataResult> => {
	const result: LinklistDataResult = {}

	const res = await fetch(`${process.env.DATA_HOST}/data/linklist.json`, {
		next: {
			revalidate: 60
		}
	})

	if (!res.ok) {
		result.error = 'There was an error fetching the data :('
		console.error('Could not fetch json data', res)
	} else {
		result.data = (await res.json()) as LinklistData[]
	}

	return result
}

export default useLinklistData
