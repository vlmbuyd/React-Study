import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
import { getPosts } from "../api";
import styles from "./PostList.module.css";

function PostList() {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const posts = postsData?.results ?? [];

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
