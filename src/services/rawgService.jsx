import { useHttp } from "../hook/http.hook";

const RawgService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://api.rawg.io/api/games?";
  const _apiKey = "key=2452c5a9aab44890a1e70379720df39e";

  const getAllGames = async () => {
    const res = await request(`${_apiBase}${_apiKey}&page=1`);
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
      name: game.name,
      released: game.released,
      image: game.background_image,
      platforms: game.platforms[0].platform.name,
      slug: game.platforms[0].platform.slug,
    };
  };

  return { loading, error, request, clearError, getAllGames };
};

export { RawgService };
