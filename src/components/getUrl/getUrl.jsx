import { _apiKey } from "../../apiKey";

const GetUrl = () => {
  const currentISODate = new Date().toISOString().slice(0, 10);
  const currentDate = new Date();

  const manageDate = (num) => {
    const newDate = new Date(new Date().setDate(currentDate.getDate() - num))
      .toISOString()
      .slice(0, 10);

    return newDate;
  };
  const randomNum = () => {
    return Math.floor(Math.random() * 400);
  };

  const popular2022 = `https://api.rawg.io/api/games?${_apiKey}&dates=2022-01-01,2022-12-30&platforms=18,1,7`;

  const random = `https://api.rawg.io/api/games?${_apiKey}&page=${randomNum()}`;

  const soon = `https://api.rawg.io/api/games?${_apiKey}&dates=${currentISODate},${manageDate(
    -365
  )}&platforms=18,1,7`;

  const bestOfTheYear = `https://api.rawg.io/api/games?${_apiKey}&dates=2023-01-01,2023-12-30&platforms=18,1,7`;

  const last30Days = `https://api.rawg.io/api/games?${_apiKey}&dates=${manageDate(
    30
  )},${currentISODate}&platforms=18,1,7`;

  const allTimeTop = `https://api.rawg.io/api/games?${_apiKey}&page=1`;

  return {
    popular2022,
    bestOfTheYear,
    last30Days,
    soon,
    allTimeTop,
    random,
  };
};

export { GetUrl };
