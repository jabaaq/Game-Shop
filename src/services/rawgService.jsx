const RawgService = () => {
  const _apiKey = "2452c5a9aab44890a1e70379720df39e";
  fetch(`https://api.rawg.io/api/games?key=${_apiKey}&page=1`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export { RawgService };
