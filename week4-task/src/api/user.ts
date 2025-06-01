import { apiClient } from "./apiClient";
import axios from "axios";
import { NicknameResponse } from "../types/user.types";
import { getNetworkError } from "@utils/apiError";
import { handleApiError } from "./handleApiError";

export const getMyNickname = async (): Promise<NicknameResponse> => {
  const userId = localStorage.getItem("userId");

  try {
    const response = await apiClient.get<NicknameResponse>("/api/v1/users/me", {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    return handleApiError<NicknameResponse>(error);
  }
};

export const updateNickname = async (
  nickname: string
): Promise<NicknameResponse> => {
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
    const response = await apiClient.patch<NicknameResponse>(
      "/api/v1/users",
      { nickname },
      {
        headers: { userId },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data as NicknameResponse;
    }
    return getNetworkError<NicknameResponse>();
  }
};
