import axios from "axios";

const baseURL =
  "https://port-0-blogbackend-jvpb2mlof9h57p.sel5.cloudtype.app/blog";

// const instance = axios.create({
//   baseURL: baseURL,
//   timeout: 1000 * 60 * 5,
// });

export const getList = async () => {
  const response = await axios.get(`${baseURL}/posts/`, {});

  return response.data;
};

export const getDetail = async (id) => {
  const response = await axios.get(`${baseURL}/posts/${id}/`);

  return response.data;
};

export const getPost = async (data) => {
  const response = await axios.post(`${baseURL}/posts/`, data);

  return response.data;
};

export const getDelete = async (id) => {
  const response = await axios.delete(`${baseURL}/posts/${id}/`);

  return response.data;
};
