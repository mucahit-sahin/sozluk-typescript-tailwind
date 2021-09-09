import AgendaItem from "./AgendaItem";

const Agenda = () => {
  return (
    <div
      className="hidden lg:block w-1/5 sticky top-28 z-0 mt-4 overflow-y-scroll pr-4"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="flex flex-row mb-2 items-center">
        <h2 className="text-gray text-xl mr-3">gündem</h2>
        <svg width="10" height="10" fill="gray" viewBox="0 0 24 24">
          <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
        </svg>
      </div>
      <ul className="flex-col">
        <AgendaItem
          title="baslıkbas lıkbaslı kbaslıkbaslık baslıkbaslıkbaslık"
          count={250}
        />
        <AgendaItem title="baslık2" count={68} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
        <AgendaItem title="baslık3" count={45} />
      </ul>
    </div>
  );
};

export default Agenda;
