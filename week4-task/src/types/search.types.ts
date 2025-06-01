import { BaseResponse } from "./common.types";

export type SearchNicknameResponse = BaseResponse<{
  nicknameList: string[];
} | null>;
