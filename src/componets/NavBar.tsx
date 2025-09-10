import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Black_Illustrated_Lion_Hotel_Logo__4_-removebg-preview.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on selection
    }
  };

  const navItems = [
    { id: "about", label: "About", number: "01" },
    { id: "experience", label: "Experience", number: "02" },
    { id: "projects", label: "Projects", number: "03" },
    { id: "contact", label: "Contact", number: "04" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      const hero = document.getElementById("hero");
      const heroBottom = hero?.offsetHeight || 0;

      if (currentY > heroBottom && currentY > lastScrollY) {
        setShowNav(false); // Scrolling down past hero
      } else {
        setShowNav(true); // Scrolling up or still in hero
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-[#0a192f] p-4 fixed w-full z-20 "
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="w-12 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-mono text-sm items-center text-[#ccd6f6]">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#64ffda] cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="text-[#64ffda]">{item.number}. </span>
              {item.label}
            </li>
          ))}
          <div>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1E_FJNqEvsjC1rgqZ4i-hezlX2rSd__IU/view?usp=sharing"
                )
              }
              className="border border-[#64ffda] rounded px-4 py-2 font-mono text-sm hover:bg-[#64ffda]/5 cursor-pointer hover:text-[#64ffda]"
            >
              Resume
            </button>
          </div>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-[#64ffda] w-6 h-6" />
            ) : (
              <Menu className="text-[#64ffda] w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[#ccd6f6] font-mono text-sm">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#64ffda] cursor-pointer"
            >
              <span className="text-[#64ffda]">{item.number}. </span>
              {item.label}
            </div>
          ))}
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1E_FJNqEvsjC1rgqZ4i-hezlX2rSd__IU/view?usp=sharing"
              )
            }
            className="border border-[#64ffda] rounded px-4 py-2 font-mono text-sm hover:bg-[#64ffda]/5 cursor-pointer hover:text-[#64ffda] w-max"
          >
            Resume
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
