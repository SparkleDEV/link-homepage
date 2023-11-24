import AvatarMetadata from '@/types/AvatarMetadata'

type AvatarMetadataResult = {
	data?: AvatarMetadata
	error?: string
}

const fetchAvatarMetadata = async (): Promise<AvatarMetadataResult> => {
	const result: AvatarMetadataResult = {}

	const res = await fetch(`${process.env.DATA_HOST}/data/avatar_meta.json`, {
		next: {
			revalidate: 60
		}
	})

	if (!res.ok) {
		result.error = 'There was an error fetching the data :('
		console.error('Could not fetch json data', res)
	} else {
		result.data = (await res.json()) as AvatarMetadata
	}

	return result
}

export default fetchAvatarMetadata
