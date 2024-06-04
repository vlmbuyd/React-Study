import { useEffect, useState } from "react";
import Post from "./Post";

const Blog = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "리액트로 블로그 만들기",
      content: "리액트로 블로그를 만들어봅시다.",
    },

    { id: 2, title: "두 번째 포스트", content: "리액트는 재밌습니다." },
  ]);
  const [count, setCount] = useState(data.length);

  const addPost = () => {
    const newData = {
      id: data.length + 1,
      title: "새로운 포스트 제목",
      content: "새로운 포스트 내용",
    };
    setData((prev) => [...prev, newData]);
  };

  const deletePost = (num) => {
    const newData = data.filter((_, index) => index !== num);
    setData(newData);
  };

  useEffect(() => {
    setCount(data.length);
  }, [data]);

  return (
    <>
      <span>총 Post 개수 : {count}</span> <br />
      <button type="button" onClick={addPost}>
        포스트 추가
      </button>
      <Post data={data} clickDelete={deletePost} />
    </>
  );
};

export default Blog;
