import { BaseResponse } from "./common.types";

export interface NicknameData {
  nickname: string;
}

export type NicknameResponse = BaseResponse<NicknameData | null>;
