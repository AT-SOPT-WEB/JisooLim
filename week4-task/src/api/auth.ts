import { apiClient } from "./apiClient";
import axios from "axios";
import {
  SignupRequest,
  SignupResponse,
  SigninRequest,
  SigninResponse,
} from "../types/auth.types";

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
  try {
    const response = await apiClient.post<SignupResponse>(
      "/api/v1/auth/signup",
      payload
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data as SignupResponse;
    }
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: "네트워크 오류가 발생했습니다.",
      data: null,
    };
  }
}

export async function signin(payload: SigninRequest): Promise<SigninResponse> {
  try {
    const response = await apiClient.post("/api/v1/auth/signin", payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data as SigninResponse;
    }
    return {
      success: false,
      code: "NETWORK_ERROR",
      message: "네트워크 오류가 발생했습니다.",
      data: null,
    };
  }
}
