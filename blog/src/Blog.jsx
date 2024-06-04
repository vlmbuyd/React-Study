import { useEffect, useState } from "react";
import Post from "./Post";
import { getList, getDetail, getPost } from "./api";

const Blog = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(data.length);

  const addPost = async () => {
    const newData = {
      title: "새 포스트",
      content: "새 포스트 내용입니당.",
      author: "vlmbuyd",
    };
    const result = await getPost(newData);

    setData((prev) => [...prev, result]);
  };

  const deletePost = (num) => {
    const newData = data.filter((_, index) => index !== num);
    setData(newData);
  };

  const modifyPost = (index) => {};

  const postLoad = async () => {
    try {
      const response = await getList();
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  // const apiRequest = async () => {
  //   const response = await getList();
  //   console.log(response);
  // };

  useEffect(() => {
    setCount(data.length);
  }, [data]);

  useEffect(() => {
    postLoad();
  }, []);

  return (
    <>
      <span>총 Post 개수 : {count}</span> <br />
      <button type="button" onClick={addPost}>
        포스트 추가
      </button>
      {/* <button onClick={apiRequest}>api 요청</button> */}
      <Post data={data} clickModify={modifyPost} clickDelete={deletePost} />
    </>
  );
};

export default Blog;
