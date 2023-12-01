type RelMeDataResult = {
	data?: string[]
	error?: string
}

const fetchRelMeData = async (): Promise<RelMeDataResult> => {
	const result: RelMeDataResult = {}

	const res = await fetch(`${process.env.DATA_HOST}/data/rel_me.json`, {
		next: {
			revalidate: 60
		}
	})

	if (!res.ok) {
		result.error = 'There was an error fetching the data :('
		result.error = 'There was an error fetching the data :('
		console.error('Could not fetch json data', res)
	} else {
		result.data = (await res.json()) as string[]
	}

	return result
}

export default fetchRelMeData
