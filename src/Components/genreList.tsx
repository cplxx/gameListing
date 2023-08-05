import { useEffect, useState } from "react";
import globalAPI from "../Services/globalAPI";

interface Genre {
  id: number;
  name: string;
  image_background: string;
  // Adicione outras propriedades do objeto de gênero, se necessário
}

function GenreList(): JSX.Element {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    globalAPI.getGenreList().then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold dark:text-white">Genre</h2>
      {/* Renderize a lista de gêneros aqui */}
      <ul>
        {genreList.map((item, index) => (
          <div
            key={item.id}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-1 rounded-lg hover:dark:bg-gray-600 ${
              activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.image_background}
              alt="Genre Background"
              className={`w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex === index ? "scale-105" : ""
              }`}
            />
            <h3
              className={`dark:text-white text-18px group-hover:font-bold duration-300 ${
                activeIndex === index ? "font-bold" : ""
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
