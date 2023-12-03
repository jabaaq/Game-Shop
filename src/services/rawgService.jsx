import { useHttp } from "../hook/http.hook";

const useRawgService = ({ page }) => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://api.rawg.io/api/games?";
  const _apiKey = "key=2452c5a9aab44890a1e70379720df39e";
  //   const _page = page;

  const getGamesByPages = async () => {
    const result = await request(`${_apiBase}${_apiKey}&page=${page}`);
    console.log("Result from getGamesByPages:", result);

    return result;
  };

  return { loading, error, request, clearError };
};

export { useRawgService };
