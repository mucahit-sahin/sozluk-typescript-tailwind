import TopicItem from "./TopicItem";

const Topic = () => {
  return (
    <div className="flex flex-col w-full lg:w-3/5 px-6">
      <h1 className="break-words text-xl text-bahama-blue-500 font-bold mb-2">
        demneme başlığı
      </h1>
      <div className="flex flex-row">
        <div className="text-sm text-bahama-blue-500">
          <a href="/" className="mr-2">
            tümü
          </a>
          |
          <a href="/" className="ml-2">
            bugün
          </a>
        </div>
        <div className="ml-auto">
          <a
            href="?p=1"
            rel="prev"
            title="önceki sayfa"
            className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
          >
            «
          </a>
          <select className="w-12 rounded-sm border border-black mr-1">
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
          </select>
          /
          <a
            href="?p=16"
            title="son sayfa"
            className="ml-1  py-0.5 px-2 border border-black rounded"
          >
            16
          </a>
          <a
            href="?p=1"
            rel="prev"
            title="önceki sayfa"
            className="ml-1  py-0.5 px-2 border border-black rounded"
          >
            »
          </a>
        </div>
      </div>
      <TopicItem
        content="deden dene me de ne dene me deden dene me de ne dene mededen dene me de ne dene mededen dene me de ne dene me"
        datetime="16.04.2016 04:13"
        username="mucahit-sahin"
      />
      <TopicItem
        content="deden dene me de ne dene me"
        datetime="16.04.2016 04:13"
        username="mucahit-sahin"
      />
      <div className="ml-auto">
        <a
          href="?p=1"
          rel="prev"
          title="önceki sayfa"
          className="ml-1  py-0.5 px-2 border rounded mr-1 border-black "
        >
          «
        </a>
        <select className="w-12 rounded-sm border border-black mr-1">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
        </select>
        /
        <a
          href="?p=16"
          title="son sayfa"
          className="ml-1  py-0.5 px-2 border border-black rounded"
        >
          16
        </a>
        <a
          href="?p=1"
          rel="prev"
          title="önceki sayfa"
          className="ml-1  py-0.5 px-2 border border-black rounded"
        >
          »
        </a>
      </div>
    </div>
  );
};

export default Topic;
