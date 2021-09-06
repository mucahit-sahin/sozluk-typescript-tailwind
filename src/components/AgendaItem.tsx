const AgendaItem = ({ title, count }: { title: string; count: number }) => {
  return (
    <li className="flex flex-row py-2 items-center  hover:bg-red-400">
      <a href="/" className="flex-initial text-mine-shaft-500 break-words ">
        {title}
      </a>
      <small className="ml-auto flex-initial text-gray-500">{count}</small>
    </li>
  );
};

export default AgendaItem;
