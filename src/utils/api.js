import axios from "axios";

const api_url = "http://localhost:8080/videos";

export const getSingleVideo = async (id) => {
  return axios.get(`http://localhost:8080/videos/${id}`);
};

export { api_url };
