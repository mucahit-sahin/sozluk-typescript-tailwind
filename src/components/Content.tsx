import { useTranslation } from "react-i18next";
import useQuery from "../utils/useQuery";
import CreatePost from "./CreatePost";
import Topics from "./Topics";

const Content = () => {
  let query = useQuery();
  const { t } = useTranslation();

  return (
    <div className="lg:w-3/5 flex">
      {query.get("q") ? (
        <div className="flex flex-col w-full px-6">
          <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
            {query.get("q")}
          </h1>
          <span className="dark:text-white">{t("not_found")}</span>
          <CreatePost title={query.get("q")!} />
        </div>
      ) : (
        <Topics />
      )}
    </div>
  );
};

export default Content;
