import Post from "./Post";

const Blog = () => {
  const blog = {
    title_1: "리액트로 블로그 만들기",
    content_1: "리액트로 블로그를 만들어봅시다.",
    title_2: "두 번째 포스트",
    content_2: "리액트는 재밌습니다.",
  };
  return (
    <>
      <Post title={blog.title_1} content={blog.content_1} />
      <Post title={blog.title_2} content={blog.content_2} />
    </>
  );
};

export default Blog;
