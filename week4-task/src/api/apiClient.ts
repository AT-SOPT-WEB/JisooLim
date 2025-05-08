import axios from "axios";

const BASE_URL = "https://api.atsopt-seminar4.site";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
