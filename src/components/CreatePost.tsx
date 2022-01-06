import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import slugify from "slugify";
import { AppState } from "../store";
import { addCommentToPost, createPost } from "../store/actions/postActions";
import { PostForm } from "../types/post";

const CreatePost = ({
  title,
  comment,
}: {
  title: string;
  comment?: boolean;
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state: AppState) => state.auth);

  const [form, setForm] = useState<PostForm>({
    creator: user.username,
    slug: title ? slugify(title, "_") : "/",
    title: title,
    message: "",
  });

  return (
    <div>
      {user.username ? (
        <div className="py-4 px-5 mt-3 bg-gray-100 ">
          <textarea
            className={`p-2 w-full ${comment ? "h-32" : "h-56"}`}
            id="editbox"
            name="Content"
            placeholder={`"${title}" hakkında bilgi verin`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button
            onClick={() => {
              form.message !== "" &&
                (comment
                  ? dispatch(addCommentToPost(title, form.message, history))
                  : dispatch(createPost(form, history)));
            }}
            className="bg-mantis-500 text-white border border-mantis-700 rounded p-2"
          >
            yolla
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h3>Bu başlığı ilk yazan sen olmak için giriş yapınız.</h3>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
