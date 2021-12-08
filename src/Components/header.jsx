import React from "react";
import { motion } from "framer-motion";
// import "../sql.css";
import { Link } from "react-router-dom";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // transition: {
    //   duration: 2,
    //   ease: "easeInOut",
    // },
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Header = () => {
  return (
    <motion.header
      id="Headerstyle"
      className="w-full bg-black-800 opacity-80 border-b-5 border-gray-300 shadow-lg mx-auto text-center py-6 bg-opacity-90s border-b-2"
    >
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ fontsize: 100, x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
        className=" fontc text-xl text-left leading-9 font-bold tracking-tight text-white sm:text-5xl sm:leading-10 px-5"
      >
        <Link to="/">DR. DOOF &#160;&#160;&#160; AI</Link>
      </motion.h2>
      <a href="https://www.mandsconsulting.com/">
        <motion.svg
          className="absolute"
          style={{ right: "35", top: "10" }}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50.000000pt"
          height="50.000000pt"
          viewBox="0 0 91.000000 92.000000"
          preserveAspectRatio="xMidYMid meet"
          whileHover={{ scale: 1.1 }}
        >
          <motion.g
            transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            variants={icon}
          >
            <motion.path
              d="M330 894 c-277 -75 -412 -400 -273 -656 31 -58 123 -147 181 -177 181 -93 401 -56 536 90 170 183 166 450 -9 625 -116 116 -277 160 -435 118z m150 -72 c-70 -46 -105 -98 -124 -185 l-6 -27 -50 50 c-27 27 -52 50 -55 50 -3 0 -5 -103 -5 -230 l0 -230 35 0 35 0 0 149 0 150 74 -78 c81 -85 101 -129 87 -191 -12 -52 -27 -76 -68 -107 -31 -24 -46 -28 -98 -28 -76 0 -118 25 -170 104 -166 252 11 589 310 590 59 0 60 0 35 -17z m219 -80 c44 -35 97 -111 111 -160 72 -245 -89 -484 -337 -500 -40 -3 -73 -2 -73 0 0 3 18 17 40 32 62 41 92 97 98 182 4 57 0 80 -16 118 l-21 47 42 39 42 40 3 -145 3 -145 34 0 35 0 0 230 c0 127 -2 230 -5 230 -2 0 -48 -43 -101 -95 -54 -52 -101 -95 -105 -95 -14 0 -30 79 -23 115 23 126 176 185 273 107z"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
          </motion.g>
        </motion.svg>

        {/* <motion.svg
          className="absolute"
          style={{ right: "35", top: "-10" }}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="80.000000pt"
          height="80.000000pt"
          viewBox="0 0 207.000000 150.000000"
          preserveAspectRatio="xMidYMid meet"
          whileHover={{ scale: 1.1 }}
        >
          <g
            transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <motion.path
              d="M1127 1096 c-86 -23 -136 -75 -144 -149 -6 -48 10 -111 34 -139 16 -18 10 -38 -11 -38 -25 0 -104 -80 -116 -116 -27 -80 10 -176 84 -219 91 -53 198 -51 302 4 l51 28 24 -29 24 -29 105 3 104 3 -68 73 -69 72 29 23 c16 12 40 32 54 44 l25 21 -45 50 c-25 27 -49 50 -53 51 -4 1 -30 -19 -56 -44 l-48 -45 -36 43 -36 44 43 30 c92 65 104 196 24 270 -52 49 -146 69 -221 49z m117 -142 c24 -23 19 -58 -10 -88 -15 -14 -30 -26 -34 -26 -5 0 -20 14 -34 31 -28 33 -33 68 -14 87 17 17 74 15 92 -4z m-65 -328 l54 -54 -31 -16 c-69 -36 -142 -9 -142 53 0 27 37 71 59 71 4 0 31 -24 60 -54z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="M1752 1096 c-127 -41 -187 -174 -133 -292 24 -53 66 -84 174 -130 48 -20 92 -44 97 -54 37 -69 -89 -96 -192 -42 l-54 29 -35 -64 c-33 -64 -34 -65 -14 -80 11 -8 45 -27 75 -41 105 -50 260 -31 339 41 55 51 77 159 47 231 -21 49 -84 97 -183 137 -78 31 -88 38 -91 63 -2 15 2 34 9 42 17 21 93 18 139 -6 22 -11 42 -20 44 -20 3 0 20 28 37 62 36 72 36 73 -60 109 -72 27 -145 32 -199 15z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="M110 1074 c0 -3 -22 -150 -50 -326 -27 -176 -50 -324 -50 -329 0 -11 167 -12 174 -1 2 4 14 86 26 182 12 96 23 176 24 178 2 1 10 -14 18 -35 8 -21 41 -105 73 -186 l57 -148 40 3 40 3 71 178 c39 97 74 174 77 170 4 -5 17 -82 29 -172 12 -90 24 -168 27 -173 3 -4 43 -8 90 -8 66 0 84 3 84 14 0 8 -22 155 -50 326 -27 171 -50 316 -50 321 0 6 -37 9 -92 7 l-92 -3 -65 -172 c-36 -95 -69 -169 -72 -165 -3 4 -35 82 -70 175 l-64 167 -87 0 c-49 0 -88 -3 -88 -6z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
        </motion.svg> */}
      </a>
    </motion.header>
  );
};

export default Header;
