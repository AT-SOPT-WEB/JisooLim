import { apiClient } from "./apiClient";
import axios from "axios";
import {
  SignupRequest,
  SignupResponse,
  SigninRequest,
  SigninResponse,
} from "../types/auth.types";
import { getNetworkError } from "@utils/apiError";

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
    return getNetworkError<SignupResponse>();
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
    return getNetworkError<SignupResponse>();
  }
}
