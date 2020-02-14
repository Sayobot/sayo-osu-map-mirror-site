export interface ResponseBase<T> {
    status: number;
    endid: number;
    data: T;
}
