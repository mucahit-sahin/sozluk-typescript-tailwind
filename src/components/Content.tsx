import Agenda from "./Agenda";
import Topics from "./Topics";

const Content = () => {
  return (
    <div className="container mx-auto flex">
      <Agenda />
      <Topics />
      <div className="flex flex-col w-1/5">reklam</div>
    </div>
  );
};

export default Content;
