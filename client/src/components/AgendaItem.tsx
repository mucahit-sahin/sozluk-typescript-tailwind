import { Link } from "react-router-dom";

const AgendaItem = ({
  title,
  count,
  slug,
}: {
  title: string;
  count: number;
  slug: string;
}) => {
  return (
    <li className="flex flex-row py-2 items-center  hover:bg-red-400">
      <Link
        to={"/" + slug}
        className="flex-initial text-mine-shaft-500 break-words "
      >
        {title}
      </Link>
      <small className="ml-auto flex-initial text-gray-500">{count}</small>
    </li>
  );
};

export default AgendaItem;
