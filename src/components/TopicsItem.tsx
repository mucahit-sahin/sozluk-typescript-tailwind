import { Link } from "react-router-dom";

const TopicsItem = ({
  title,
  content,
  username,
  datetime,
  slug,
}: {
  title: string;
  content: string;
  username: string;
  datetime: string;
  slug: string;
}) => {
  return (
    <div className="flex flex-col mt-3">
      <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
        <Link to={"/" + slug}>{title}</Link>
      </h1>
      <div className="break-words mb-1">
        <span>{content}</span>
      </div>
      <div className="flex flex-row">
        <Link to="/" className="mr-2">
          <svg
            id="chevron-up-thick"
            fill="blue"
            width="10px"
            viewBox="0 0 512 512"
          >
            <path d="m496 341l-189-225c-31-27-63-27-94 0l-197 225c-16 15-12 43 4 55 15 16 39 12 55-4l185-209 177 209c16 16 40 20 55 4 20-12 20-40 4-55z"></path>
          </svg>
        </Link>
        <Link to="/">
          <svg
            id="chevron-down-thick"
            fill="blue"
            width="10px"
            viewBox="0 0 512 512"
          >
            <path d="m492 108c-15-15-43-12-55 4l-177 213-185-209c-16-16-40-20-55-4-16 12-20 40-4 55l197 225c31 31 63 27 94 0l189-225c16-15 16-43-4-59z"></path>
          </svg>
        </Link>
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

export default TopicsItem;
