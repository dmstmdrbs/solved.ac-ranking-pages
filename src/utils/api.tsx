import axios from "axios";

const BASE_URL = "https://solved.ac/api/v3";
axios.defaults.baseURL = BASE_URL;

export const fetchUserProfile = async (userId: string) => {
  const result = await axios.get(`/user/show`, {
    params: {
      solvedacToken: 123,
      handle: userId,
    },
  });
  return result.data;
};
