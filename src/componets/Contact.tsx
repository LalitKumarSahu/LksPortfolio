import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-6 min-h-screen px-4 text-center"
    >
      {/* Heading */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-mono text-lightNavy text-sm uppercase tracking-wider"
      >
        Contact Me
      </motion.p>

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-bold text-lightGary text-3xl md:text-5xl"
      >
        Get In Touch
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lightGary max-w-xl text-sm md:text-base"
      >
        My inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you! Feel free to mail me
        about any relevant job updates.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          window.open("mailto:shahulalit5@gmail.com");
        }}
        className="border-2 border-lightNavy hover:bg-lightNavy/10 transition-all duration-300 font-mono px-6 py-2 rounded text-lightGary text-base cursor-pointer mt-2"
      >
        Mail Me
      </motion.button>
    </motion.div>
  );
};

export default Contact;
