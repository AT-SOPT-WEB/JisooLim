import { apiClient } from "./apiClient";

export interface SearchNicknameResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    nicknameList: string[];
  } | null;
}

export async function searchNickname(keyword: string): Promise<SearchNicknameResponse> {
  try {
    const response = await apiClient.get("/api/v1/users", {
      params: { keyword },
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error: unknown) {
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: "네트워크 오류가 발생했습니다.",
      data: null,
    };
  }
}
