import { motion } from "framer-motion";

const Right = () => {
  return (
    <motion.div
      className="right-0 bottom-0 h-screen fixed flex items-end pr-8"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6 text-[#64ffda] font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Rotated Email with hover transition */}
        <motion.a
          href="mailto:chandannekya@gmail.com"
          className="tracking-wider text-2xl hover:text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          whileHover={{ scale: 1.1, color: "#ffffff" }}
        >
          chandannekya@gmail.com
        </motion.a>

        {/* Vertical Line */}
        <motion.div
          className="w-[1px] h-32 bg-[#ccd6f6]"
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Right;
