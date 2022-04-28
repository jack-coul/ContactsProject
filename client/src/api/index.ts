import axios from "axios";

export const API = {
  get: async (url: string) => {
    const res = await axios.get(`http://localhost:4000/api/v1/${url}`);
    return res;
  },
  post: async (url: string, data: object) => {
    const res = await axios.post(`http://localhost:4000/api/v1/${url}`, data);
    return res;
  },
  patch: async (url: string, data: object) => {
    const res = await axios.patch(`http://localhost:4000/api/v1/${url}`, data);
    return res;
  },
  delete: async (url: string) => {
    const res = await axios.delete(`http://localhost:4000/api/v1/${url}`);
    return res;
  },
};
