import { apiClient } from "./apiClient";
import axios from "axios";
import { ApiResponse } from "../types/user.types";

export const getMyNickname = async (): Promise<ApiResponse> => {
  const userId = localStorage.getItem("userId");

  try {
    const response = await apiClient.get<ApiResponse>("/api/v1/users/me", {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data as ApiResponse;
    }
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: "네트워크 오류가 발생했습니다.",
      data: null,
    };
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
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data as ApiResponse;
    }
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: "네트워크 오류가 발생했습니다.",
      data: null,
    };
  }
};
