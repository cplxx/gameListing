interface Game {
  name: string;
  background_image: string;
}

interface TrendingGamesProps {
  gameList: Game[];
}

const TrendingGames: React.FC<TrendingGamesProps> = ({ gameList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-3xl dark:text-white">Trending Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gameList.slice(0, 4).map((item) => (
          <div
            key={item.name}
            className="bg-[#302f2f5e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="h-[270px] rounded-t-lg object-cover"
            />
            <h2 className="dark:text-white p-2 text-xl font-bold">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
