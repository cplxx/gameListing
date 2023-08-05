interface GameBanner {
  name: string;
  background_image: string;
}

interface BannerProps {
  gameBanner: GameBanner;
}

const Banner: React.FC<BannerProps> = ({ gameBanner }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-2xl text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1">Get now</button>
      </div>
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="md:h-[520px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
