export interface NicknameData {
  nickname: string;
}

export interface ApiResponse {
  success: boolean;
  code: string;
  message: string;
  data: NicknameData | null;
}
