export interface UserApiResponse <T> {
  readonly page: string,
  readonly per_page: string,
  readonly total: string,
  readonly total_pages: string,
  readonly data: T;
}
