import "./index.css";
import { navData } from "./data/data";
import { useState } from "react";
import phone from "./assets/phone.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, navigationList, contact } = navData[0];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md px-6 py-2 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <div className="rounded-full p-2">
            <span className="block w-6 h-1 bg-blue-500 mb-1"></span>
            <span className="block w-6 h-1 bg-blue-500 mb-1"></span>
            <span className="block w-6 h-1 bg-blue-500"></span>
          </div>
        </button>
        <nav
          className={`${
            isOpen ? "h-[250px] opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 ease-in-out overflow-hidden md:flex md:max-h-none md:opacity-100 md:space-x-4 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent px-4 py-4 md:p-0`}
        >
          <ul className="md:flex md:space-x-4 md:items-center">
            {navigationList.map((item, index) => (
              <>
                <li key={index} className="md:mb-0 mb-2">
                  <a href={item.url} className="text-gray-500">
                    {item.text}
                  </a>
                </li>
              </>
            ))}
            <div className="flex items-center justify-start gap-2 text-xl font-bold">
              <img
                className="bg-blue-500 rounded-full p-2"
                src={phone}
                alt="phone"
              />
              <h4 className="bg-gray-400 text-gray-700">
                Let's Talk +91 98336 36916
              </h4>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
