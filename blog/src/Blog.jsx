import { useEffect, useState } from "react";
import Post from "./Post";
import { getList, getDetail, getPost, getDelete } from "./api";

const Blog = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(data.length);

  const addPost = async () => {
    const newData = {
      title: "새 포스트",
      content: "새 포스트 내용.",
      author: "vlmbuyd",
    };
    const result = await getPost(newData);

    setData((prev) => [...prev, result]);
  };

  const deletePost = (num) => {
    getDelete(num);
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

  useEffect(() => {
    setCount(data.length);
    postLoad();
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
      <Post data={data} clickModify={modifyPost} clickDelete={deletePost} />
    </>
  );
};

export default Blog;
