import axios from "axios";
import { apiClient } from "./apiClient";

interface NicknameData {
  nickname: string;
}

interface ApiResponse {
  success: boolean;
  code: string;
  message: string;
  data: NicknameData | null;
}

export const getMyNickname = async (): Promise<ApiResponse> => {
  const userId = localStorage.getItem("userId");

  try {
    const response = await apiClient.get<ApiResponse>("/api/v1/users/me", {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as ApiResponse;
    }
    throw error;
  }
};

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
