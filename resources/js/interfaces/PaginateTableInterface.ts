export interface PaginateTableInterface<T> {
    data: T[];
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    from: number | null;
    to: number | null;
    next_page_url?: string | null;
    prev_page_url?: string | null;
    path: string;
    first_page_url: string;
    last_page_url: string;
}
