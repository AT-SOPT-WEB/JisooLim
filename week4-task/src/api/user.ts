import axios from "axios";
import { apiClient } from "./apiClient";

interface ApiResponse {
  success: boolean;
  code: string;
  message: string;
  data: unknown | null;
}

export const updateNickname = async (
  nickname: string
): Promise<ApiResponse> => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return {
      success: false,
      code: "NO_USER_ID",
      message: "로그인 정보가 없습니다.",
      data: null,
    };
  }
  try {
    const response = await apiClient.patch<ApiResponse>(
      "/api/v1/users",
      { nickname },
      {
        headers: { userId },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as ApiResponse;
    }
    throw error;
  }
};
