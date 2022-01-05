import useQuery from "../utils/useQuery";
import Agenda from "./Agenda";
import CreatePost from "./CreatePost";
import Topics from "./Topics";

const Content = () => {
  let query = useQuery();

  return (
    <div className="container mx-auto flex">
      <Agenda />
      {query.get("q") ? (
        <div className="flex flex-col w-full lg:w-3/5 px-6">
          <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
            {query.get("q")}
          </h1>
          <span>böyle bir şey yok.</span>
          <CreatePost title={query.get("q")!} />
        </div>
      ) : (
        <Topics />
      )}
      <div className="hidden lg:flex flex-col w-1/5">reklam</div>
    </div>
  );
};

export default Content;
