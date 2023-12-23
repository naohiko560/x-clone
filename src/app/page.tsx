import { GoHomeFill, GoBell, GoPeople } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { CiMail, CiBookmark, CiCircleMore } from 'react-icons/ci';
import { RiFileListLine } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { BiUser } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  {
    title: 'X',
    titleEn: 'X',
    icon: FaXTwitter,
  },
  {
    title: 'ホーム',
    titleEn: 'Home',
    icon: GoHomeFill,
  },
  {
    title: '話題を検索',
    titleEn: 'Explore',
    icon: IoIosSearch,
  },
  {
    title: '通知',
    titleEn: 'Notifications',
    icon: GoBell,
  },
  {
    title: 'メッセージ',
    titleEn: 'Messages',
    icon: CiMail,
  },
  {
    title: 'リスト',
    titleEn: 'Lists',
    icon: RiFileListLine,
  },
  {
    title: 'ブックマーク',
    titleEn: 'Bookmarks',
    icon: CiBookmark,
  },
  {
    title: 'コミュニティ',
    titleEn: 'Communities',
    icon: GoPeople,
  },
  {
    title: 'プレミアム',
    titleEn: 'Premium',
    icon: FaXTwitter,
  },
  {
    title: 'プロフィール',
    titleEn: 'Profile',
    icon: BiUser,
  },
  {
    title: 'もっと見る',
    titleEn: 'More',
    icon: CiCircleMore,
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* 左ナビゲーションバー */}
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full py-1 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 text-xl transition duration-200 flex items-center justify-start w-fit space-x-5 rounded-3xl p-3"
                href={`/${item.titleEn.toLowerCase()}`}
                key={item.titleEn.toLowerCase()}
              >
                <div className="text-2xl">
                  <item.icon />
                </div>
                {item.title !== 'X' && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="w-56 rounded-full bg-primary px-6 py-3 mt-5 text-base font-bold text-center hover:opacity-70 transition duration-200">
              ポストする
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 mb-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-8 h-8"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">なおひこ</div>
                <div className="">@naohiko_blog</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
