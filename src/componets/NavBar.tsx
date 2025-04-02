import { motion } from "framer-motion";
import logo from "../assets/Black_Illustrated_Lion_Hotel_Logo__4_-removebg-preview.png";

const NavBar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex justify-between items-center p-5 bg-[#0a192f]"
    >
      {/* Logo Section */}
      <div className="w-12">
        <img src={logo} alt="Logo" />
      </div>

      {/* Menu Items */}
      <ul className="flex gap-6 font-mono text-sm items-center text-[#ccd6f6]">
        <li
          className="hover:text-[#64ffda] cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-[#64ffda]">01. </span>About
        </li>
        <li
          className="hover:text-[#64ffda] cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          <span className="text-[#64ffda]">02. </span>Experience
        </li>
        <li
          className="hover:text-[#64ffda] cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          <span className="text-[#64ffda]">03. </span>Projects
        </li>
        <li
          className="hover:text-[#64ffda] cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <span className="text-[#64ffda]">04. </span>Contact
        </li>

        <div>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Jz9QsWBNCS664i3DhMlWsydxoCR-9n0k/view?usp=sharing"
              );
            }}
            className="border border-[#64ffda] rounded px-4 py-2 font-mono text-sm hover:bg-[#64ffda]/5 cursor-pointer hover:text-[#64ffda]"
          >
            Resume
          </button>
        </div>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
