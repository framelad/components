import useSWR, { mutate } from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function useGithubUserSWR(username) {
    if (!username) {
        return {
            user: null,
            error: null,
            loading: false,
            refetch: () => {},
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, mutate: refetch } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        user: data,
        error,
        loading: !data && !error,
        refetch,
    }
}
