const Post = ({ title, content }) => {
  const dt = new Date();
  const date =
    dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{date}</p>
    </>
  );
};

export default Post;
