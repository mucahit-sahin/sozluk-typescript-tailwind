import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchPostAction } from "../store/actions/postActions";
import TopicItem from "./TopicItem";
import { AppState } from "../store";
import CreatePost from "./CreatePost";

const Topic = () => {
  const dispatch = useDispatch();
  let { id } = useParams<{ id?: string }>();

  useEffect(() => {
    console.log(id);
    dispatch(searchPostAction(id!));
  }, [dispatch, id]);

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
            <div className="ml-auto">
              <a
                href="?p=1"
                rel="prev"
                title="önceki sayfa"
                className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
              >
                «
              </a>
              <select className="w-12 rounded-sm border border-black mr-1">
                <option selected>1</option>
                <option>2</option>
              </select>
              /
              <a
                href="?p=16"
                title="son sayfa"
                className="ml-1  py-0.5 px-2 border border-black rounded"
              >
                {post.numberOfPages}
              </a>
              <a
                href="?p=1"
                rel="prev"
                title="önceki sayfa"
                className="ml-1  py-0.5 px-2 border border-black rounded"
              >
                »
              </a>
            </div>
          </div>
          {post.comments?.map((comment, index) => (
            <TopicItem
              key={index}
              content={comment.message}
              datetime={comment.createdAt}
              username={comment.username}
            />
          ))}
          <div className="flex">
            <div className="ml-auto">
              <a
                href="?p=1"
                rel="prev"
                title="önceki sayfa"
                className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
              >
                «
              </a>
              <select className="w-12 rounded-sm border border-black mr-1">
                <option selected>1</option>
                <option>2</option>
              </select>
              /
              <a
                href="?p=16"
                title="son sayfa"
                className="ml-1  py-0.5 px-2 border border-black rounded"
              >
                {post.numberOfPages}
              </a>
              <a
                href="?p=1"
                rel="prev"
                title="önceki sayfa"
                className="ml-1  py-0.5 px-2 border border-black rounded"
              >
                »
              </a>
            </div>
          </div>
          <CreatePost title={post.title} comment />
        </div>
      )}
    </div>
  );
};

export default Topic;
