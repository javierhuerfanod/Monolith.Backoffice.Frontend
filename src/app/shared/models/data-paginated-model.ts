export interface DataPaginated<T> {
    total_rows: number;
    rows: T[];
}