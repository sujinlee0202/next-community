import PopularItem from "./PopularItem";

const Popular = () => {
  return (
    <aside className="w-80 shrink-0 border-l pl-5 pt-5">
      <p className="pb-3 text-lg font-bold">주간 인기 TOP 10</p>
      <PopularItem />
    </aside>
  );
};
export default Popular;
