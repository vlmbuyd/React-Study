const Post = ({ data, clickDelete }) => {
  const dt = new Date();
  const date =
    dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

  const handleDelete = (index) => {
    clickDelete(index);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item[0]}</h1>
            <p>{item[1]}</p>
            <span>{date}</span> <br />
            <button>수정</button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default Post;
