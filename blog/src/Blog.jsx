import { useEffect, useState } from "react";
import Post from "./Post";
import { getList, getDetail, getPost, getDelete } from "./api";

const Blog = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(data.length);

  const addPost = async (e) => {
    e.preventDefault();
    const input = e.target[0].value.split("/");
    const newData = {
      title: input[0],
      content: input[1],
      author: input[2],
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
      setData(response.result);
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
      <form onSubmit={addPost} action="#">
        <input placeholder="제목/내용/이름" />
      </form>
      <button type="button" onClick={addPost}>
        포스트 추가
      </button>
      <Post data={data} clickModify={modifyPost} clickDelete={deletePost} />
    </>
  );
};

export default Blog;
