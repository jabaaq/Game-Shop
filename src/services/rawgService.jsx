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
    console.log(_transformGameDetails(res));
    return _transformGameDetails(res);
  };
  const getGameScreenshots = async (id) => {
    const res = await request(
      `https://api.rawg.io/api/games/${id}/screenshots?${_apiKey}`
    );
    console.log(_transformGameScreenshots(res));
    return _transformGameScreenshots(res);
  };

  const _transformGameScreenshots = (game) => {
    return {
      screenshots: game.results.map((screenshot) => screenshot.image),
    };
  };

  const _transformGameDetails = (game) => {
    return {
      name: game.name,
      description: game.description_raw,
      rating: game.rating,
      released: game.released,
      genres: game.genres.map((genre) => genre.name).join(", "),
      website: game.website,
      developers: game.developers.map((dev) => dev.name).join(", "),
      publishers: game.publishers
        .map((publishers) => publishers.name)
        .join(", "),
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

  return {
    loading,
    error,
    request,
    clearError,
    getAllGames,
    getGameData,
    getGameScreenshots,
  };
};

export { RawgService };
