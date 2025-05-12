export interface SignupRequest {
  loginId: string;
  password: string;
  nickname: string;
}

export interface SignupResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    userId?: number;
    nickname?: string;
  } | null;
}

export interface SigninRequest {
  loginId: string;
  password: string;
}

export interface SigninResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    userId?: number;
  } | null;
}
