import axios from "axios";

const baseURL =
  "https://port-0-api-prac-1272llx0bndkw.sel5.cloudtype.app/api/v1";

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
