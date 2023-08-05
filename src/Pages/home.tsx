import { useEffect, useState } from "react";
import GenreList from "../Components/genreList";
import GlobalApi from "../Services/globalAPI";
import Banner from "../Components/banner";
import TrendingGames from "../Components/trendingGames";
import GamesByGenresId from "../Components/gamesGenresId";

interface Game {
  background_image: string;
  name: string;
  metacritic: number;
  rating: number;
  reviews_count: number;
  suggestions_count: number;
}

function Home() {
  const [allGameList, setAllGameList] = useState<Game[]>([]);
  const [gameListByGenres, setGameListByGenres] = useState<Game[]>([]);
  const [selectedGenresName, setSelectedGenresName] =
    useState<string>("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id: number | string) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          genereId={(genereId: number) => getGameListByGenresId(genereId)}
          selectedGenresName={(name: string) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId
              gameList={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
