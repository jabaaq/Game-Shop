import { useHttp } from "../hook/http.hook";
import { _apiKey } from "../apiKey";
const RawgService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://api.rawg.io/api/games?";
  const _gameInfo = `https://api.rawg.io/api/games/3498?${_apiKey}`;

  const getAllGames = async (selectedApi = `${_apiBase}${_apiKey}&page=1`) => {
    const res = await request(selectedApi);
    console.log(res.results.map(_transformGame));
    return res.results.map(_transformGame);
  };
  const getGameData = async (id) => {
    const res = await request(`https://api.rawg.io/api/games/${id}?${_apiKey}`);
    console.log(res);
    return _transformGameDetails(res);
  };

  const _transformGameDetails = (game) => {
    return {
      name: game.name,
      description: game.description_raw,
    };
  };

  const _transformGame = (game) => {
    return {
      id: game.id,
      name: game.name.length >= 80 ? game.name.slice(0, 80) + "..." : game.name,
      released: game.released,
      image: game.background_image,
      platforms: game.platforms[0].platform.name,
      slug: game.platforms[0].platform.slug,
      rating: game.rating,
    };
  };

  return { loading, error, request, clearError, getAllGames, getGameData };
};

export { RawgService };
