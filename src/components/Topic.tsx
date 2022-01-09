import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { searchPostAction } from "../store/actions/postActions";
import TopicItem from "./TopicItem";
import { AppState } from "../store";
import CreatePost from "./CreatePost";
import useQuery from "../utils/useQuery";

const Topic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let query = useQuery();
  let { id } = useParams<{ id?: string }>();
  let page = query.get("p") || "1";

  useEffect(() => {
    console.log("page " + page);
    dispatch(searchPostAction(id!, parseInt(page)!));
  }, [dispatch, id, page]);

  const printNumbers = () => {
    const row = [];
    for (var i = 1; i <= post.numberOfPages; i++) {
      row.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return row;
  };

  const { post, loading } = useSelector((state: AppState) => state.post);
  return (
    <div className="flex flex-col w-full lg:w-3/5 px-6">
      {loading ? (
        <h2>Yükleniyor</h2>
      ) : (
        <div>
          <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
            {post.title}
          </h1>
          <div className="flex flex-row">
            <div className="text-sm text-bahama-blue-500">
              <Link to="/" className="mr-2">
                tümü
              </Link>
              |
              <Link to="/" className="ml-2">
                bugün
              </Link>
            </div>
            {post.numberOfPages > 1 && (
              <div className="ml-auto">
                <a
                  href="?p=1"
                  rel="prev"
                  title="önceki sayfa"
                  className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
                >
                  «
                </a>
                <select
                  className="w-12 rounded-sm border border-black mr-1"
                  defaultValue={page}
                  onChange={(e) => history.push(`?p=${e.target.value}`)}
                >
                  {printNumbers()}
                </select>
                /
                <a
                  href={"?p=" + post.numberOfPages}
                  title="son sayfa"
                  className="ml-1  py-0.5 px-2 border border-black rounded"
                >
                  {post.numberOfPages}
                </a>
                <a
                  href={"?p=" + post.numberOfPages}
                  rel="prev"
                  title="önceki sayfa"
                  className="ml-1  py-0.5 px-2 border border-black rounded"
                >
                  »
                </a>
              </div>
            )}
          </div>
          {post.comments?.map((comment, index) => (
            <TopicItem
              key={index}
              content={comment.message}
              datetime={comment.createdAt}
              username={comment.username}
              likes={comment.likes}
              dislikes={comment.unLikes}
              postId={post.slug}
              commentId={index}
            />
          ))}
          <div className="flex">
            {post.numberOfPages > 1 && (
              <div className="ml-auto">
                <a
                  href={"?p=" + (post.currentPage - 1)}
                  rel="prev"
                  title="önceki sayfa"
                  className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
                >
                  «
                </a>
                <select
                  className="w-12 rounded-sm border border-black mr-1"
                  defaultValue={page}
                  onChange={(e) => history.push(`?p=${e.target.value}`)}
                >
                  {printNumbers()}
                </select>
                /
                <a
                  href={"?p=" + post.numberOfPages}
                  title="son sayfa"
                  className="ml-1  py-0.5 px-2 border border-black rounded"
                >
                  {post.numberOfPages}
                </a>
                <a
                  href={"?p=" + (post.currentPage + 1)}
                  rel="prev"
                  title="sonraki sayfa"
                  className="ml-1  py-0.5 px-2 border border-black rounded"
                >
                  »
                </a>
              </div>
            )}
          </div>
          <CreatePost title={post.title} comment />
        </div>
      )}
    </div>
  );
};

export default Topic;
