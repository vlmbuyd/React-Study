const Post = ({ data, clickModify, clickDelete }) => {
  const handleModify = () => {
    clickModify();
  };

  const handleDelete = (id) => {
    clickDelete(id);
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
            <button onClick={() => handleDelete(item.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default Post;
