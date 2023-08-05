import axios, { AxiosInstance, AxiosResponse } from "axios";

const key = "005b3f7853a140ddbf4e08d4b350a5c4";
const baseURL = "https://api.rawg.io/api";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
});

const getGenreList = (): Promise<AxiosResponse> => {
  return axiosInstance.get("/genres", {
    params: {
      key: key,
    },
  });
};

const getAllGames = (): Promise<AxiosResponse> => {
  return axiosInstance.get("/games", {
    params: {
      key: key,
    },
  });
};

const getGameListByGenreId = (id: string): Promise<AxiosResponse> => {
  return axiosInstance.get("/games", {
    params: {
      key: key,
      genres: id,
    },
  });
};

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
