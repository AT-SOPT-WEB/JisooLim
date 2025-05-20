export interface SearchNicknameResponse {
  success: boolean;
  code: string;
  message: string;
  data: {
    nicknameList: string[];
  } | null;
}
