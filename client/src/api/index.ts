import axios from "axios";

export const API = {
  get: async (url: string) => {
    const res = await axios.get(`/api/v1/${url}`);
    return res;
  },
  post: async (url: string, data: object) => {
    const res = await axios.post(`/api/v1/${url}`, data);
    return res;
  },
  patch: async (url: string, data: object) => {
    const res = await axios.patch(`/api/v1/${url}`, data);
    return res;
  },
  delete: async (url: string) => {
    const res = await axios.delete(`/api/v1/${url}`);
    return res;
  },
};
