import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

interface UseApiFetchOptions<T> extends UseFetchOptions<T> {
    clear?: boolean
    withoutData?: boolean
    client?: boolean
}

export function useApiFetch<T>(
    url: string,
    options: UseApiFetchOptions<T> = {}
) {
    const userAuth = useCookie('access_token')
    const config = useRuntimeConfig()
    const defaults: UseApiFetchOptions<T> = {
        withoutData: 'withoutData' in options ? options.withoutData : true,
        clear: false,
        baseURL: options.clear ? '' : config.public.api_url,
        key: userAuth.value
            ? userAuth.value + url
            : config.public.api_url + url,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: userAuth.value ? `Bearer ${userAuth.value}` : '',
        },
        transform: function (data: any) {
            if (Object.keys(data).includes('data') && defaults.withoutData) {
                return data.data
            } else {
                return data
            }
        },
    }

    if (options?.client) {
        defaults.body = {
            client_id: Number(config.public.client_id),
            client_secret: config.public.client_secret,
        }
    }
    const params = defu(options, defaults)

    return useFetch(url, params)
}
