import axios from "axios";
import { getNetworkError } from "@utils/apiError";

export function handleApiError<T>(error: unknown): T {
  if (axios.isAxiosError(error) && error.response && error.response.data) {
    return error.response.data as T;
  }
  return getNetworkError<T>();
}
