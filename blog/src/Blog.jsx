import { useState } from "react";
import Post from "./Post";

const Blog = () => {
  const [title, setTitle] = useState({
    title_1: "리액트로 블로그 만들기",
    title_2: "두 번째 포스트",
  });
  const [content, setContent] = useState({
    content_1: "리액트로 블로그를 만들어봅시다.",
    content_2: "리액트는 재밌습니다.",
  });
  return (
    <>
      <span>총 Post 개수 : </span>
      <Post title={title.title_1} content={title.content_1} />
      <Post title={content.title_2} content={content.content_2} />
    </>
  );
};

export default Blog;
