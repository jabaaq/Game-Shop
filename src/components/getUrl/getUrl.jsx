const GetUrl = () => {
  const currentISODate = new Date().toISOString().slice(0, 10);
  const currentDate = new Date();
  const last30DaysISODate = new Date(
    new Date().setDate(currentDate.getDate() - 30)
  )
    .toISOString()
    .slice(0, 10);

  const manageDate = (num) => {
    const newDate = new Date(new Date().setDate(currentDate.getDate() - num))
      .toISOString()
      .slice(0, 10);

    return newDate;
  };

  const randomNum = () => {
    return Math.floor(Math.random() * 400);
  };

  const popular2022 =
      " https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=2022-01-01,2022-12-30&platforms=18,1,7",
    random = `https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&page=${randomNum()}`,
    soon = `https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=${currentISODate},${manageDate(
      -365
    )}&platforms=18,1,7`,
    bestOfTheYear =
      "https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=2023-01-01,2023-12-30&platforms=18,1,7",
    last30Days = `https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=${manageDate(
      30
    )},${currentISODate}&platforms=18,1,7`,
    allTimeTop =
      "https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&page=1";

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
