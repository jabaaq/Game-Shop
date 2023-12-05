import "./sidebar.css";
import { FaStar } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { motion } from "framer-motion";

const SidebarMenu = () => {
  return (
    <aside id="sidebar">
      <div className="each-section">
        <IconBox
          h3={"Your Games"}
          name={"Added Games"}
          icon={<CgMenuGridO size={20} />}
        />
        <IconBox
          h3={"New Releases"}
          name={"Last 30 days"}
          icon={<FaStar size={20} />}
        />
        <IconBox
          h3={"Top"}
          name={"Best of the year"}
          icon={<IoMdTrophy size={20} />}
        />
      </div>
    </aside>
  );
};

function IconBox(props) {
  const { h3 = null, name, icon } = props;
  return (
    <div className="navSection">
      <div className="section-title">
        <h3>{h3}</h3>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="section-box">
        <div className="iconBox">{icon}</div>
        {name}
      </motion.div>
    </div>
  );
}

export { SidebarMenu };
