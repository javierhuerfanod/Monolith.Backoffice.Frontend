export interface TablePagedPayload {
    first: number;
    rows: number;
    sort_field?: string;
    sort_order?: number;
    search?: string;    
    iconField?: string;
}