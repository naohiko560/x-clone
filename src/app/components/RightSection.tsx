import { BsSearch } from 'react-icons/bs';

function RightSection() {
  return (
    <section className="w-full sticky top-2 overflow-scroll hidden-scrollbar mt-2 flex flex-col items-stretch h-screen px-6">
      <div className="sticky top-2">
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="検索"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 mt-6">
        <h3 className="font-bold text-xl my-3 px-4">関連性の高いアカウント</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">Other User</div>
                  <div className="text-gray-500 text-xs">@otheruser1234</div>
                </div>
              </div>
              <button className="rounded-full px-6 py-2 bg-white text-neutral-950">フォロー</button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 mt-4">
        <h3 className="font-bold text-xl my-3 px-4">いまどうしてる？</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-base">#トレンド ${i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSection