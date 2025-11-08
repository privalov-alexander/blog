export interface BasePaginationType {
    total: number
    count: number
    per_page: number
    current_page: number
    total_pages: number
    links: {
        previous?: string
        next?: string
    }
    available_per_pages: number[]
}
