import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import {
  dislikeToComment,
  likeToComment,
  undislikeToComment,
  unlikeToComment,
} from "../store/actions/postActions";

const TopicItem = ({
  content,
  username,
  datetime,
  likes,
  dislikes,
  postId,
  commentId,
}: {
  content: string;
  username: string;
  datetime: Date;
  likes: string[];
  dislikes: string[];
  postId: string;
  commentId: number;
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: AppState) => state.auth);

  const likeorunlike = () => {
    if (likes.includes(user.username)) {
      dispatch(unlikeToComment(postId, commentId));
    } else {
      dispatch(likeToComment(postId, commentId));
      if (dislikes.includes(user.username)) {
        dispatch(undislikeToComment(postId, commentId));
      }
    }
  };

  const dislikeorundislike = () => {
    if (dislikes.includes(user.username)) {
      dispatch(undislikeToComment(postId, commentId));
    } else {
      dispatch(dislikeToComment(postId, commentId));
      if (likes.includes(user.username)) {
        dispatch(unlikeToComment(postId, commentId));
      }
    }
  };
  return (
    <div className="my-5">
      <div className="break-words mb-1">
        <span>{content}</span>
      </div>
      <div className="flex flex-row">
        <div
          className={`mr-2 p-1 flex items-center rounded hover:bg-yellow-200 ${
            likes.includes(user.username) && "bg-yellow-400"
          }`}
          onClick={() => likeorunlike()}
          title="Like"
        >
          <svg
            id="chevron-up-thick"
            fill="blue"
            width="10px"
            height="10px"
            viewBox="0 0 512 512"
          >
            <path d="m496 341l-189-225c-31-27-63-27-94 0l-197 225c-16 15-12 43 4 55 15 16 39 12 55-4l185-209 177 209c16 16 40 20 55 4 20-12 20-40 4-55z"></path>
          </svg>
        </div>
        <div
          onClick={() => dislikeorundislike()}
          className={`p-1 flex items-center rounded hover:bg-yellow-200  ${
            dislikes.includes(user.username) && "bg-yellow-400 "
          }`}
          title="dislike"
        >
          <svg
            id="chevron-down-thick"
            fill="blue"
            width="10px"
            viewBox="0 0 512 512"
          >
            <path d="m492 108c-15-15-43-12-55 4l-177 213-185-209c-16-16-40-20-55-4-16 12-20 40-4 55l197 225c31 31 63 27 94 0l189-225c16-15 16-43-4-59z"></path>
          </svg>
        </div>
        <div className="ml-auto">
          <span className="text-gray text-xs mr-2">{datetime}</span>
          <Link to="/" className="text-gray text-sm">
            {username}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
