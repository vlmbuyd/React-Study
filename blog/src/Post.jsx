const Post = ({ data, clickModify, clickDelete }) => {
  const dt = new Date();
  const date =
    dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

  const handleModify = () => {
    clickModify();
  };

  const handleDelete = (index) => {
    clickDelete(index);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <span>{item.author}</span> <br />
            <span>{item.created_at}</span> <br />
            <span>{item.updated_at}</span> <br />
            <button onClick={() => handleModify(index)}>수정</button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default Post;
