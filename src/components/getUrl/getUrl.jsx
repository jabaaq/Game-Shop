import { useState } from "react";

const GetUrl = () => {
  const [newApiKey, setNewApiKey] = useState(null);

  const popular2022 =
      "https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=2022-01-01,2022-12-30&platforms=18,1,7",
    bestOfTheYear =
      "https://api.rawg.io/api/games?key=2452c5a9aab44890a1e70379720df39e&dates=2023-01-01,2023-12-30&platforms=18,1,7";

  return { popular2022, bestOfTheYear };
};

export { GetUrl };
