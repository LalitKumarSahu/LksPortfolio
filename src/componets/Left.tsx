import { SiGithub, SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Left = () => {
  return (
    <div className="flex items-end fixed left-0 h-screen">
      <div className="p-5 text-3xl flex flex-col items-center gap-6 text-[#64ffda]">
        {/* Social Icons */}
        <a
          href="https://github.com/chandannekya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chandannekya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/chandannekya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://www.instagram.com/chandannekya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <FaInstagram />
        </a>

        {/* Vertical Line */}
        <div className="w-[1px] h-32 bg-[#ccd6f6] mt-4"></div>
      </div>
    </div>
  );
};

export default Left;
