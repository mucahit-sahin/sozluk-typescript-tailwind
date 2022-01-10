import { Link } from "react-router-dom";

const QuickIndexItem = ({
  text,
  href,
  title,
  className,
}: {
  text: string;
  href: string;
  title: string;
  className?: string;
}) => {
  return (
    <li
      className={`mx-2 dark:text-white text-center flex-1 leading-10 border-b-4  border-transparent hover:border-mantis-500 hover:text-mantis-500 font-semibold ${
        className && className
      }`}
    >
      <Link to={href} title={title}>
        {text}
      </Link>
    </li>
  );
};

export default QuickIndexItem;
