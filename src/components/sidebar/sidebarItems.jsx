import { FaStar } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidMedal } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { RiBoxingFill } from "react-icons/ri";

import { GetUrl } from "../getUrl/getUrl";

const {
  popular2022,
  bestOfTheYear,
  last30Days,
  allTimeTop,
  random,
  soon,
  action,
} = GetUrl();

const sideBarButtons = [
  {
    h3: "Games",
    name: "Random",
    icon: <GiPerspectiveDiceSixFacesRandom size={20} />,
    apiKey: random,
  },
  {
    h3: "New Releases",
    name: "Last 30 days",
    icon: <FaStar size={20} />,
    apiKey: last30Days,
  },
  {
    name: "Soon",
    icon: <TbPlayerTrackNextFilled size={20} />,
    apiKey: soon,
  },
  {
    h3: "Top",
    name: "All time top",
    icon: <FaCrown size={20} />,
    apiKey: allTimeTop,
  },
  {
    name: "Best of the year",
    icon: <BiSolidMedal size={20} />,
    apiKey: bestOfTheYear,
  },
  {
    name: "Popular in 2022",
    icon: <IoStatsChartSharp size={20} />,
    apiKey: popular2022,
  },
];

export { sideBarButtons };
