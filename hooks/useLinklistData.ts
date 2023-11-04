import LinklistData from '@/types/LinklistData'

const useLinklistData = (url: string): LinklistData[] => {
	// TODO (29 Oct 23): Fetch data from url
	return [
		{
			display: 'Mastodon',
			url: 'https://tech.lgbt/@Sparkle',
			icon_url: '/icons/logos/Mastodon.svg'
		},
		{
			display: 'Bluesky',
			url: 'https://bsky.app/profile/thesparkle.bsky.social',
			icon_url: '/icons/logos/Bluesky.png'
		},
		{
			display: 'Twitter',
			url: 'https://twitter.com/YouGotSparkled',
			icon_url: '/icons/logos/Twitter.svg'
		},
		{
			display: 'GitHub',
			url: 'https://github.com/SparkleDEV',
			icon_url: '/icons/logos/GitHub.svg'
		},
		{
			display: 'Pronouns Page',
			url: 'https://pronouns.page/@Sparkle',
			icon_url: '/icons/logos/PronounsPage.svg'
		}
	]
}

export default useLinklistData
