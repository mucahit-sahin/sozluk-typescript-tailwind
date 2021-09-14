import { useSelector } from "react-redux";
import { AppState } from "../store";
import useQuery from "../utils/useQuery";
import Agenda from "./Agenda";
import CreatePost from "./CreatePost";
import Topics from "./Topics";

const Content = () => {
  const { search } = useSelector((state: AppState) => state.post);
  let query = useQuery();

  return (
    <div className="container mx-auto flex">
      <Agenda />
      {query.get("q") ? (
        <div className="flex flex-col w-full lg:w-3/5 px-6">
          <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
            {search}
          </h1>
          <span>böyle bir şey yok.</span>
          <CreatePost title={search!} />
        </div>
      ) : (
        <Topics />
      )}
      <div className="flex flex-col w-1/5">reklam</div>
    </div>
  );
};

export default Content;
