import { useState } from "react";
import Post from "./Post";

const Blog = () => {
  const [data, setData] = useState([
    ["리액트로 블로그 만들기", "리액트로 블로그를 만들어봅시다."],

    ["두 번째 포스트", "리액트는 재밌습니다."],
  ]);
  const [count, setCount] = useState(data.length);

  const addPost = () => {};

  const deletePost = (num) => {
    const newData = data.filter((_, index) => index !== num);
    setData(newData);
    setCount(newData.length);
  };

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
