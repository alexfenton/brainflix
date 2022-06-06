import axios from "axios";

const api_url = "https://project-2-api.herokuapp.com/videos/";
const api_key = '?api_key="2d876b55-e885-415f-8c94-d9c6445ce9e6"&url';

export const getSingleVideo = async (id) => {
  return axios.get(`${api_url}${id}${api_key}`);
};

export { api_key, api_url };
