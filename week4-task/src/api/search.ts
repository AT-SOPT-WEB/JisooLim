import { apiClient } from "./apiClient";
import axios from "axios";
import { SearchNicknameResponse } from "../types/search.types";
import { getNetworkError } from "@utils/apiError";

export async function searchNickname(
  keyword: string
): Promise<SearchNicknameResponse> {
  try {
    const response = await apiClient.get("/api/v1/users", {
      params: { keyword },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data;
    }
    return getNetworkError<SearchNicknameResponse>();
  }
}
