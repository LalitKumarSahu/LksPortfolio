import { motion } from "framer-motion";
import photo from "../componets/WhatsApp Image 2025-04-01 at 21.08.15_d4ed22da.jpg";

const About = () => {
  const activities = [
    "Problem Solving",
    "Reading Tech Blogs",
    "Team Management",
    "Mentoring & Guiding Others",
    "Participating in Hackathons",
    "Exploring New Technologies",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-28 mt-10"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex flex-col md:flex-row gap-10"
      >
        {/* Left Section */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-lightGary mb-4"
          >
            <span className="text-lightNavy font-mono">01.</span>
            <p>About Me</p>
            <div className="h-[1px] w-full bg-lightGary" />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-lightGary leading-6 mb-6 text-justify"
          >
            Hello! I’m Chandan, from the culturally rich city of Lucknow, known
            as the City of Nawabs. I'm a curious, hardworking, and goal-driven
            individual who believes in continuous learning. <br />
            <br />
            I carry strong moral values, organizational skills, and a keen eye
            for detail. I'm currently pursuing a Bachelor's in Computer Science
            & Engineering at the University of Lucknow.
            <br />
            <br />
            My interests lie in Web Development and Data Science, and I love
            bringing real-world ideas to life. I'm actively involved in coding
            communities like AlgoZenith and Coding Connoisseurs.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center text-lightGary text-sm"
              >
                <span className="text-lightNavy font-mono mr-2">
                  0{index + 1}.
                </span>
                <p>{activity}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-lightNavy/20 w-48 sm:w-60 md:w-64 grayscale hover:grayscale-0 rounded-md flex justify-center items-center text-white text-lg shadow-lg overflow-hidden"
          >
            <img
              src={photo}
              alt="Chandan"
              className="object-cover rounded-lg p-2 w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
