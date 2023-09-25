export interface IPagination<T> {
  data: T;
  nextCursor: number | null;
}
