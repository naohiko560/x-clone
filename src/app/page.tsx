import LeftSidebar from './components/LeftSidebar';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* 左ナビゲーションバー */}
        <LeftSidebar />
        <main></main>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
