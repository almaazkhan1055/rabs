import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import phone from "./assets/phone.png";

const Nav = () => {
  const [navData, setNavData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/rabsdata/rabs_data.json")
      .then((res) => res.json())
      .then((data) => setNavData(data))
      .catch((error) => {
        console.error("Error fetching nav data:", error);
      });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!navData) {
    return <div>Loading...</div>;
  }

  const { logo, navigationList, contact } = navData.navData[0];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md px-6 py-2 sm:fixed sm:top-0 sm:w-full z-50">
      <div className="container mx-auto py-1 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <div className="rounded-full p-2">
            <span className="block w-6 h-1 bg-blue-500 mb-1"></span>
            <span className="block w-6 h-1 bg-blue-500 mb-1"></span>
            <span className="block w-6 h-1 bg-blue-500"></span>
          </div>
        </button>
        <nav
          ref={navRef}
          className={`${
            isOpen ? "h-[250px] opacity-100" : "max-h-0 opacity-0"
          } transition-all text-md duration-300 ease-in-out overflow-hidden md:flex md:max-h-none md:opacity-100 md:space-x-4 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent px-4 py-4 md:gap-[200px] gap-0`}
        >
          <ul className="md:flex md:space-x-4 md:items-center">
            {navigationList?.map((item, index) => (
              <li key={index} className="md:mb-0 mb-2">
                <a href={item.url} className="text-gray-500">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-start gap-2 text-md font-bold">
            <img
              className="bg-blue-500 rounded-full p-2 w-8 h-auto animate-pulse-custom"
              src={phone}
              alt="phone"
            />
            <h4 className=" text-gray-700">Let's Talk {contact}</h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
