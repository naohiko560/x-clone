import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';

function MainComponent() {
  return (
    <main className="ml-[275px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-700">
      <h1 className="text-3xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 z-10">Home</h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-700 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className="w-full h-full text-2xl text-gray-500 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
            placeholder="いまどうしてる？"
          />
          <div className="w-full justify-between items-center flex">
            <div className=""></div>
            <div className="w-full max-w-[150px]">
              <button className="rounded-full bg-primary px-4 py-2 w-full mt-5 text-lg text-center hover:opacity-70 transition duration-200 font-bold">
                ポストする
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border-t-[0.5px] border-gray-600 p-2 pr-4 flex space-x-4">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">なおひこ</div>
                  <div className="text-gray-500">@naohiko_blog</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1時間</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, et. Dolorem,
                incidunt exercitationem molestias veniam temporibus blanditiis omnis accusantium
                voluptatum, voluptas eos autem laudantium quam necessitatibus excepturi impedit.
                Sed, earum. Quod dignissimos ratione molestias dolore, atque itaque distinctio
                quidem eius, veniam sed tenetur sint similique quaerat aliquam cumque repellat hic?
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainComponent;
