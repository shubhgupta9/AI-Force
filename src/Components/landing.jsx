import React from "react";
// import "../styles1.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg2 from "../jeremy-bishop-G9i_plbfDgk-unsplash.jpg";
import CardAction from "./cardAction";
// import c from "../jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

// const icon = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)",
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     // transition: {
//     //   duration: 2,
//     //   ease: "easeInOut",
//     // },
//     fill: "rgba(255, 255, 255, 1)",
//   },
// };

const mystyle = {
  // display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  minHeight: "100vh",
  backgroundImage: `url(${bg2})`,
};

const landing = () => {
  return (
    <div style={mystyle} top="0px">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ fontsize: 100, x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
        className=" headerPosition w-full bg-black-800 opacity-80 border-b-5 border-gray-300 shadow-lg mx-auto text-center py-8 bg-opacity-90s border-b-2 object-center fontc text-6xl text-center
          font-bold text-white "
      >
        <Link to="/Page2">
          Welcome &#160;&#160;&#160; To &#160;&#160;&#160; DR.DOOF &#160;&#160;&#160;
          AI
        </Link>
      </motion.h1>
      <Link to="/Page2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" my-6 bg-opacity-40 border-2  object-right-bottom bg-black-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-6 rounded-full"
        >
          Continue
        </motion.button>
      </Link>

      {/* <span>
        <CardAction
          title="MandS"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
        ></CardAction>
      </span> */}

      <div className="px-4 pt-2 pb-2">
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ fontsize: 100, x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.2 }}
          whileHover={{
            scale: 1.1,
          }}
          className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <CardAction
            title="MandS"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
          ></CardAction>
        </motion.span>

        <motion.span
          initial={{ x: 100, opacity: 0 }}
          animate={{ fontsize: 100, x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.2 }}
          whileHover={{
            scale: 1.1,
          }}
          className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <CardAction
            title="MandS"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
          ></CardAction>
        </motion.span>
      </div>
    </div>
  );
};

export default landing;

{
  /* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */
}
{
  /* <span>
        <CardAction
          title="MNAds"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
        ></CardAction>
      </span> */
}
