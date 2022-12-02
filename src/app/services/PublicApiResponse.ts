export interface PublicApiResponse<T> {
  readonly count: string;
  readonly entries: T;
}
