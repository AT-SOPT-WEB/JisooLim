import { BaseResponse } from "./common.types";

type UserInfo = {
  loginId: string;
  password: string;
  nickname: string;
  userId: number;
};

export type SigninRequest = Pick<UserInfo, "loginId" | "password">;
export type SignupRequest = Omit<UserInfo, "userId">;

export type SignupResponse = BaseResponse<
  Pick<UserInfo, "userId" | "nickname"> | null
>;

export type SigninResponse = BaseResponse<
  Pick<UserInfo, "userId"> | null
>;
