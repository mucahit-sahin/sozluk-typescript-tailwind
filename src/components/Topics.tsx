import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { getLatestPost } from "../store/actions/postActions";
import TopicsItem from "./TopicsItem";

const Topics = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: AppState) => state.post);

  useEffect(() => {
    dispatch(getLatestPost());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full px-6">
      {loading ? (
        <span>yükleniyor</span>
      ) : (
        posts.map((post) => (
          <TopicsItem
            title={post.title}
            content={post.comments[post.comments.length - 1].message}
            username={post.comments[post.comments.length - 1].username}
            slug={post.slug}
            datetime={post.comments[
              post.comments.length - 1
            ].createdAt.toString()}
            likes={post.comments[post.comments.length - 1].likes}
            dislikes={post.comments[post.comments.length - 1].unLikes}
            commentId={post.comments.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Topics;
