export function getNetworkError<T>(): T {
  return {
    success: false,
    code: "NETWORK_ERROR",
    message: "네트워크 오류가 발생했습니다.",
    data: null,
  } as T;
}
