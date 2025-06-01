import { apiClient } from "./apiClient";
import { SearchNicknameResponse } from "../types/search.types";
import { handleApiError } from "./handleApiError";

export async function searchNickname(
  keyword: string
): Promise<SearchNicknameResponse> {
  try {
    const response = await apiClient.get("/api/v1/users", {
      params: { keyword },
    });
    return response.data;
  } catch (error: unknown) {
    return handleApiError<SearchNicknameResponse>(error);
  }
}
