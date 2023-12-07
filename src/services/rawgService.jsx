import { useHttp } from "../hook/http.hook";
//this year: https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=2023-01-01,2023-12-30&platforms=18,1,7
const RawgService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://api.rawg.io/api/games?";
  const _apiKey = "key=2452c5a9aab44890a1e70379720df39e";

  const getAllGames = async (selectedApi = `${_apiBase}${_apiKey}&page=1`) => {
    const res = await request(selectedApi);
    console.log(res.results.map(_transformGame));
    return res.results.map(_transformGame);
  };

  const getGame = async () => {
    const res = await request(`${_apiBase}${_apiKey}&page=1`);
    return _transformGame(res.results[0]);
  };

  const _transformGame = (game) => {
    return {
      id: game.id,
      name: game.name.length >= 80 ? game.name.slice(0, 80) + "..." : game.name,
      released: game.released,
      image: game.background_image,
      platforms: game.platforms[0].platform.name,
      slug: game.platforms[0].platform.slug,
    };
  };

  return { loading, error, request, clearError, getAllGames };
};

export { RawgService };
