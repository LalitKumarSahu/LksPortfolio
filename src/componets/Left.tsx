import { SiGithub, SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <motion.div
      className="flex items-end bottom-0  fixed left-0 justify-end h-screen"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="p-5 pb-0 text-3xl flex flex-col items-center justify-center gap-8 text-[#64ffda]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Social Icons */}
        {[
          { icon: <SiGithub />, link: "https://github.com/LalitKumarSahu" },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/lalit-sahu-45788725a",
          },
          
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/_____sanatani_____lalit___/",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            {item.icon}
          </motion.a>
        ))}

        {/* Vertical Line */}
        <motion.div
          className="w-[1px] h-36 bg-[#ccd6f6] mt-6"
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Left;
